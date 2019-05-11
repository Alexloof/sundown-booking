import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import PickDish from './pages/PickDish'
import PickDrinks from './pages/PickDrinks'
import TimePeople from './pages/TimePeople'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/pick-dish" component={PickDish} />
      <Route exact path="/pick-drinks" component={PickDrinks} />
      <Route exact path="/time-people" component={TimePeople} />
    </Switch>
  )
}

export default Routes
