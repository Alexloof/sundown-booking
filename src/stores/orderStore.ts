import { observable, action } from 'mobx'
import React from 'react'
import axios from 'axios'
import { Moment } from 'moment'
import { toast } from 'react-toastify'

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
  public time: string = ''

  @observable
  public nbrOfPeople: number = 1

  @observable
  public availableDrinks: IDrink[] = []

  @action
  public setPeople = (nbrOfPeople: number) => (this.nbrOfPeople = nbrOfPeople)

  @action
  public setTime = (time: Moment) => (this.time = time.toISOString())

  @action
  public setEmail = (email: string) => (this.email = email)

  @action
  public toggleDrink = (id: string) => {
    if (this.drinks.includes(id)) {
      this.drinks = this.drinks.filter(drinkId => drinkId !== id)
    } else {
      this.drinks.push(id)
    }
  }

  public getDrinkDetails = (drinkId: string) =>
    this.availableDrinks.find(drink => drink.id === drinkId)

  public saveOrder = () => {
    const order = {
      email: this.email,
      dish: this.dish,
      drinks: this.drinks,
      time: this.time,
      nbrOfPeople: this.nbrOfPeople
    }

    localStorage.setItem(this.email, JSON.stringify(order))

    // API CALL TO SAVE ORDER HERE
  }

  @action
  public refreshOrder = () => {
    this.email = ''
    this.dish = {} as IDish
    this.drinks = []
    this.time = ''
    this.nbrOfPeople = 1
  }

  @action
  public hydrateOrder = (email: string): boolean => {
    const order = localStorage.getItem(email)
    if (order) {
      const { email, dish, drinks, time, nbrOfPeople } = JSON.parse(order)
      this.email = email
      this.dish = dish
      this.drinks = drinks
      this.time = time
      this.nbrOfPeople = nbrOfPeople

      return true
    } else {
      return false
    }
  }

  @action
  public fetchDrinks = async () => {
    try {
      const { data } = await axios.get('https://api.punkapi.com/v2/beers')

      this.availableDrinks = data.map((drink: any) => ({
        id: drink.id,
        name: drink.name,
        img: drink.image_url
      }))
    } catch (error) {
      toast('🤨 Could not load drinks... Try again later!', {
        type: toast.TYPE.ERROR
      })
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
      toast('🤨 Could not generate a dish... Try again later!', {
        type: toast.TYPE.ERROR
      })
    }
  }
}

const orderStore: OrderStore = new OrderStore()

const OrderStoreContext = React.createContext(orderStore)

export { orderStore, OrderStoreContext }
