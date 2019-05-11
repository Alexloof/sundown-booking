import React, { useContext } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import PickDish from './pages/PickDish'
import PickDrinks from './pages/PickDrinks'
import TimePeople from './pages/TimePeople'
import Receipt from './pages/Receipt'
import { __RouterContext } from 'react-router'
import { useTransition, animated, config } from 'react-spring'
import styled from 'styled-components'

const Routes = () => {
  const { location } = useContext(__RouterContext)
  const transitions = useTransition(location, location => location.pathname, {
    config: config.stiff,
    initial: { opacity: 1 },
    from: { opacity: 0, transform: 'translateY(-50px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(50px)', position: 'absolute' }
  })

  return (
    <RelativeContainer>
      {transitions.map(({ item, props, key }) => (
        <animated.div
          style={{
            ...props,
            height: '100%',
            width: '100%'
          }}
          key={key}
        >
          <Switch location={item}>
            <Route exact path="/" component={Home} />
            <Route exact path="/pick-dish" component={PickDish} />
            <Route exact path="/pick-drinks" component={PickDrinks} />
            <Route exact path="/time-people" component={TimePeople} />
            <Route exact path="/receipt" component={Receipt} />
          </Switch>
        </animated.div>
      ))}
    </RelativeContainer>
  )
}

export default Routes

const RelativeContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
