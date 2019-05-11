import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { OrderStoreContext } from '../../stores/orderStore'
import { observer } from 'mobx-react-lite'
import Button from '../../components/Button'
import { RouteComponentProps } from 'react-router-dom'
import Heading from '../../components/Heading'

interface IProps extends RouteComponentProps {}

const PickDish = observer(({ history }: IProps) => {
  const { generateDish, dish } = useContext(OrderStoreContext)
  console.log(dish.img)

  useEffect(() => {
    generateDish()
  }, [])

  return (
    <>
      <Heading>Pick a dish</Heading>
      <Wrapper>
        <FoodWrapper>
          <Image src={dish.img} />
          <Title>{dish.title}</Title>
          <Desc>{dish.desc}</Desc>
          <Button onClick={() => generateDish()}>Generate new dish</Button>
        </FoodWrapper>
        <ComingUpBox>
          <h3>Pick some drinks next</h3>
          <Button onClick={() => history.push('/pick-drinks')}>Next</Button>
        </ComingUpBox>
      </Wrapper>
    </>
  )
})

export default PickDish

const Wrapper = styled.div`
  display: flex;
`

const FoodWrapper = styled.div`
  width: 60%;
  height: 450px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Title = styled.h2`
  margin: 20px 0px;
`

const Desc = styled.div`
  font-size: 14px;
  margin-bottom: 20px;
  max-height: 120px;
  min-height: 120px;
  overflow-y: auto;
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
