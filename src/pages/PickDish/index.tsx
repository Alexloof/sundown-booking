import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'
import { OrderStoreContext } from '../../stores/orderStore'
import { observer } from 'mobx-react-lite'
import Button from '../../components/Button'
import { RouteComponentProps } from 'react-router-dom'
import Heading from '../../components/Heading'
import queryString from 'query-string'

interface IProps extends RouteComponentProps {}

const PickDish = observer(({ history, location }: IProps) => {
  const { update } = queryString.parse(location.search)

  const { generateDish, dish } = useContext(OrderStoreContext)

  useEffect(() => {
    !update && generateDish()
  }, [generateDish, update])

  return (
    <>
      <Heading>Pick a dish</Heading>
      <Wrapper>
        <DishWrapper>
          <Dish>
            <Image src={dish.img} />
            <Content>
              <Title>{dish.title}</Title>
              <Desc>{dish.desc && dish.desc.slice(0, 270)}...</Desc>
            </Content>
          </Dish>

          <Button onClick={() => generateDish()}>Generate new dish</Button>
        </DishWrapper>
        <ComingUpBox>
          <h3>Pick some drinks next</h3>
          <Button
            onClick={() =>
              history.push(`/pick-drinks${update ? '?update=true' : ''}`)
            }
          >
            Next
          </Button>
        </ComingUpBox>
      </Wrapper>
    </>
  )
})

export default PickDish

const Wrapper = styled.div`
  display: flex;
`

const DishWrapper = styled.div`
  width: 60%;
`
const Dish = styled.div`
  position: relative;
  height: 450px;
  margin-bottom: 30px;
`

const Content = styled.div`
  position: absolute;
  bottom: 0;
  background: linear-gradient(to top, black 30%, transparent 100%);
  padding: 20px;
  color: white;
  height: 200px;
  padding-top: 80px;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Title = styled.h2`
  margin-bottom: 10px;
`

const Desc = styled.div`
  font-size: 14px;
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
