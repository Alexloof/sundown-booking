import React, { useContext } from 'react'
import Heading from '../../components/Heading'
import styled from 'styled-components'
import Button from '../../components/Button'
import { OrderStoreContext } from '../../stores/orderStore'
import { RouteComponentProps, Redirect } from 'react-router-dom'
import moment from 'moment'

interface IProps extends RouteComponentProps {}

const Receipt = ({ history }: IProps) => {
  const {
    email,
    nbrOfPeople,
    time,
    drinks,
    dish,
    getDrinkDetails
  } = useContext(OrderStoreContext)

  if (!dish || !email || !nbrOfPeople || !time || drinks.length === 0) {
    return <Redirect to="/" />
  }

  return (
    <>
      <Button onClick={() => history.push('/')} style={{ marginLeft: 'auto' }}>
        Back to Home
      </Button>
      <Heading>Receipt</Heading>
      <Wrapper>
        <List>
          <Item>
            <Image src={dish.img} />
            {dish.title}
          </Item>
          {drinks.map(drinkId => {
            const detailedDrink = getDrinkDetails(drinkId)
            return (
              <Item key={detailedDrink.id}>
                <Image src={detailedDrink.img} />
                {detailedDrink.name}
              </Item>
            )
          })}
        </List>
        <Details>
          <ItemDetail>
            <strong>Time: </strong>
            <br />
            {moment(time).format('LLL')}
          </ItemDetail>
          <ItemDetail>
            <strong>Number of people: </strong>
            <br />
            {nbrOfPeople}
          </ItemDetail>
          <ItemDetail>
            <strong>Email: </strong>
            <br />
            {email}
          </ItemDetail>
        </Details>
      </Wrapper>
    </>
  )
}

export default Receipt

const Wrapper = styled.div`
  display: flex;
  margin-top: 40px;
`

const List = styled.ul`
  width: 60%;
`

const Details = styled.div``

const ItemDetail = styled.p`
  margin-bottom: 20px;
`

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`
const Image = styled.img`
  height: 65px;
  width: 65px;
  object-fit: contain;
  margin-right: 20px;
`
