import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

function PrivateRouteCheck(PrivateComponent) {
  class PrivateRoute extends Component {
    state = {
      isAuthenticated: false
    }
    componentWillMount() {
      const token = localStorage.getItem('access_token')
      if (token) {
        this.setState({
          isAuthenticated: true,
        })
      }
    }
    render() {
      const { isAuthenticated } = this.state
      return (
        <Route render={props => (
          isAuthenticated ?
            <PrivateComponent {...props} /> :
            <Redirect to='/' />
        )}
        />
      )
    }
  }
  return PrivateRoute
}


export default PrivateRouteCheck