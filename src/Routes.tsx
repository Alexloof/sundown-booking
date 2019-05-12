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
    initial: { opacity: 0 },
    from: { opacity: 0, transform: 'translate3d(0px, -50px, 0px)' },
    enter: { opacity: 1, transform: 'translate3d(0px, 0px, 0px)' },
    leave: {
      opacity: 0,
      position: 'absolute'
    }
  })

  return (
    <RelativeContainer>
      {transitions.map(({ item, props, key }) => (
        <AnimatedWrapper style={{ ...props }} key={key}>
          <Switch location={item}>
            <Route exact path="/" component={Home} />
            <Route exact path="/pick-dish" component={PickDish} />
            <Route exact path="/pick-drinks" component={PickDrinks} />
            <Route exact path="/time-people" component={TimePeople} />
            <Route exact path="/receipt" component={Receipt} />
          </Switch>
        </AnimatedWrapper>
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

const AnimatedWrapper = styled(animated.div)`
  height: 100%;
  width: 100%;
`
