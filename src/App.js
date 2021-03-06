import React, {Component} from 'react'
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout'
import {Route,Switch} from 'react-router-dom'
import Orders from './containers/Orders/Orders'

class App extends Component{
  render()
  {
    return (
      <Layout>
          <Switch>
            <Route path = "/orders" exact component = {Orders} />
            <Route path = "/" exact component = {BurgerBuilder} />
            <Route path = "/checkout" component = {Checkout} />           
          </Switch>
      </Layout>
    )
  }
}

export default App;
