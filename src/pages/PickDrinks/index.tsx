import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { OrderStoreContext } from '../../stores/orderStore'
import styled from 'styled-components'
import Button from '../../components/Button'
import { RouteComponentProps } from 'react-router-dom'
import Heading from '../../components/Heading'

interface IProps extends RouteComponentProps {}

const PickDrinks = observer(({ history }: IProps) => {
  const { fetchDrinks, availableDrinks, drinks, pickDrink } = useContext(
    OrderStoreContext
  )

  useEffect(() => {
    fetchDrinks()
  }, [])

  return (
    <>
      <Heading>Pick drinks</Heading>
      <Wrapper>
        <DrinksList>
          {availableDrinks.map(drink => {
            const isPicked = drinks.includes(drink.id)
            return (
              <Drink
                key={drink.id}
                isPicked={isPicked}
                onClick={() => pickDrink(drink.id)}
              >
                <Image src={drink.img} />
                <Name>{drink.name}</Name>
              </Drink>
            )
          })}
        </DrinksList>
        <ComingUpBox>
          <h3>Pick date and number of people next</h3>
          <Button onClick={() => history.push('/time-people')}>Next</Button>
        </ComingUpBox>
      </Wrapper>
    </>
  )
})

export default PickDrinks

const Wrapper = styled.div`
  display: flex;
`

const DrinksList = styled.div`
  width: 60%;
  border: ${props => `1px solid ${props.theme.colors.grey[0]}`};
  display: flex;
  flex-wrap: wrap;
`

interface IDrink {
  isPicked: boolean
}

const Drink = styled.div<IDrink>`
  width: calc(50% - 20px);
  margin: 10px;
  height: 200px;
  padding: 35px;
  cursor: pointer;
  border: ${props =>
    props.isPicked ? '2px solid #75e046' : '2px solid transparent'};
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`

const Name = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`

const ComingUpBox = styled.div`
  width: 30%;
  margin-left: 10%;
  padding: 50px;
  height: 215px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: ${props => `1px solid ${props.theme.colors.grey[0]}`};
`
