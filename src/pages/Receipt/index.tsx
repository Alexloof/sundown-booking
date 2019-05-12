import React, { useContext, useEffect } from 'react'
import Heading from '../../components/Heading'
import styled from 'styled-components'
import Button from '../../components/Button'
import { OrderStoreContext } from '../../stores/orderStore'
import { RouteComponentProps } from 'react-router-dom'
import moment from 'moment'
import { observer } from 'mobx-react-lite'
import { toast } from 'react-toastify'
import Checkmark from '../../components/Checkmark'

interface IProps extends RouteComponentProps {}

const Receipt = observer(({ history }: IProps) => {
  const {
    email,
    nbrOfPeople,
    time,
    drinks,
    dish,
    getDrinkDetails
  } = useContext(OrderStoreContext)

  useEffect(() => {
    if (!dish || !email || !nbrOfPeople || !time || drinks.length === 0) {
      return history.push('/')
    }

    toast('🤗 Your order has been saved!', {
      type: toast.TYPE.SUCCESS
    })
  }, [dish, email, nbrOfPeople, time, drinks.length, history])

  return (
    <>
      <Button onClick={() => history.push('/')} style={{ marginLeft: 'auto' }}>
        Back to Home
      </Button>
      <ReceiptWrapper>
        <Heading>Thanks for your order!</Heading>
        <Checkmark />
        <ItemsWrapper>
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
        </ItemsWrapper>
      </ReceiptWrapper>
    </>
  )
})

export default Receipt

const ReceiptWrapper = styled.div`
  width: 650px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  width: 100%;
`

const List = styled.ul``

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
  height: 100px;
  width: 100px;
  object-fit: contain;
  margin-right: 20px;
  border-radius: 10px;
`
