import { observable, action } from 'mobx'
import React from 'react'
import axios from 'axios'

interface IDish {
  title: string
  desc: string
  img: string
}

interface IDrink {
  id: string
  name: string
  img: string
}

class OrderStore {
  @observable
  public email: string = ''

  @observable
  public dish: IDish = {} as IDish

  @observable
  public drinks: string[] = []

  @observable
  public time: any = ''

  @observable
  public amountOfPeople: number = 1

  @observable
  public availableDrinks: IDrink[] = []

  @action
  public pickDrink = (id: string) => {
    this.drinks.push(id)
  }

  @action
  public fetchDrinks = async () => {
    try {
      const { data } = await axios.get('https://api.punkapi.com/v2/beers')
      console.log({ data })
      this.availableDrinks = data.map((drink: any) => ({
        id: drink.id,
        name: drink.name,
        img: drink.image_url
      }))
    } catch (error) {
      console.log({ error })
    }
  }

  @action
  public generateDish = async () => {
    try {
      const { data } = await axios.get(
        'https://www.themealdb.com/api/json/v1/1/random.php'
      )
      if (data && data.meals.length > 0) {
        this.dish = {
          title: data.meals[0].strMeal,
          desc: data.meals[0].strInstructions,
          img: data.meals[0].strMealThumb
        }
      }
    } catch (error) {
      console.log({ error })
    }
  }
}

const orderStore: OrderStore = new OrderStore()

const OrderStoreContext = React.createContext(orderStore)

export { orderStore, OrderStoreContext }
