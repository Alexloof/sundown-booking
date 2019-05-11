import React, { useContext } from 'react'
import { OrderStoreContext } from '../../../stores/orderStore'
import styled from 'styled-components'
import { useTrail, animated } from 'react-spring'
import { observer } from 'mobx-react-lite'

const config = { mass: 5, tension: 3000, friction: 200 }

interface IProps {
  availableDrinks: any[]
}

const DrinksList = observer(({ availableDrinks }: IProps) => {
  const { drinks, toggleDrink } = useContext(OrderStoreContext)

  const trail = useTrail(availableDrinks.length, {
    config,
    opacity: 1,
    maxHeight: '200px',
    from: { opacity: 0, maxHeight: '0px' }
  })

  return (
    <Wrapper>
      {trail.map((props, index) => {
        const drink = availableDrinks[index]
        const isPicked = drinks.includes(drink.id)
        return (
          <Drink
            key={drink.id}
            className={isPicked ? 'picked' : ''}
            onClick={() => toggleDrink(drink.id)}
            style={{ ...props }}
          >
            <Image src={drink.img} />
            <Name>{drink.name}</Name>
          </Drink>
        )
      })}
    </Wrapper>
  )
})

export default DrinksList

const Wrapper = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
`

const Drink = styled(animated.div)`
  width: calc(50% - 20px);
  margin: 10px;
  height: 200px;
  padding: 35px;
  cursor: pointer;
  border-radius: 10px;
  transition: 0.2s background ease;
  overflow: hidden;
  &.picked {
    background: ${props => props.theme.colors.secondary + '26'};
  }
`

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
  transition: 0.2s height ease;
`

const Name = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
`
