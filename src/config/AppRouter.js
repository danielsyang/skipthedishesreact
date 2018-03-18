import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Login from '../features/login/Login'
import Products from '../features/products/Products'
import Navigation from '../features/navigation/Navigation'
import Cart from '../features/cart/Cart'
import Orders from '../features/orders/Order'
import NewLogin from '../features/login/NewLogin'
import PrivateRouteCheck from '../features/authentication/PrivateRoute'

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>

          <Route path='/' exact component={Login} />
          <Route path='/register' exact component={NewLogin} />
          <Navigation>
            <Route path='/products' exact component={PrivateRouteCheck(Products)} />
            <Route path='/cart' exact component={PrivateRouteCheck(Cart)} />
            <Route path='/orders' exact component={PrivateRouteCheck(Orders)} />
          </Navigation>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRouter