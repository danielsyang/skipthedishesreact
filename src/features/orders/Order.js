import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getCustomerOrdersThunk } from './OrderThunk'
import OrderDisplay from './OrderDisplay'

class Orders extends Component {
  componentDidMount() {
    const { getCustomerOrders } = this.props
    const token = localStorage.getItem('access_token')
    getCustomerOrders(token)
      .catch(error => console.log(error))
  }
  render() {
    return (
      <div>
        <OrderDisplay />
      </div>
    )
  }

}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  getCustomerOrders: (token) => (dispatch(getCustomerOrdersThunk(token)))
})

export default connect(mapStateToProps, mapDispatchToProps)(Orders)