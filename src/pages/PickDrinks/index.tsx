import React, { useContext, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { OrderStoreContext } from '../../stores/orderStore'
import styled from 'styled-components'
import Button from '../../components/Button'
import { RouteComponentProps } from 'react-router-dom'
import Heading from '../../components/Heading'
import queryString from 'query-string'
import DrinksList from './DrinksList'

interface IProps extends RouteComponentProps {}

const PickDrinks = observer(({ history, location }: IProps) => {
  const { update } = queryString.parse(location.search)

  const { fetchDrinks, availableDrinks, drinks } = useContext(OrderStoreContext)

  useEffect(() => {
    fetchDrinks()
  }, [])

  const handleNext = () => {
    if (drinks.length > 0) {
      history.push(`/time-people${update ? '?update=true' : ''}`)
    } else {
      // TODO: notification
    }
  }

  return (
    <>
      <Heading>Pick drinks</Heading>
      <Wrapper>
        <DrinksList availableDrinks={availableDrinks} />
        <ComingUpBox>
          <h3>Pick date and number of people next</h3>
          <Button onClick={handleNext}>Next</Button>
        </ComingUpBox>
      </Wrapper>
    </>
  )
})

export default PickDrinks

const Wrapper = styled.div`
  display: flex;
`

const ComingUpBox = styled.div`
  width: 30%;
  margin-left: 20%;
  padding: 50px;
  height: 215px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border: ${props => `1px solid ${props.theme.colors.grey[0]}`};
`
