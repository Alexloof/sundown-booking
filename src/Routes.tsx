import React from 'react'
import Home from './pages/Home'
import { Route, Switch } from 'react-router-dom'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}

export default Routes
