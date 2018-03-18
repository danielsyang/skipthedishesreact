import React, { Component } from 'react'
import { connect } from 'react-redux'
import moment from 'moment'
import { withRouter } from 'react-router-dom'

import CartDisplay from './CartDisplay'
import { createNewOrder } from '../../api/Order'
import { openSnackbarAction } from '../snackbar/SnackbarActions'
import { clearCartAction } from './CartActions'

class Cart extends Component {
  state = {
    deliveryAddress: '',
    contact: '',
  }
  placeOrder = () => {
    const { cart, openSnackbar, history, clearCart } = this.props
    const { deliveryAddress, contact } = this.state
    const order = {
      date: moment().format(),
      customerId: 0,
      deliveryAddress: deliveryAddress,
      contact: contact,
      storeId: cart[0].storeId,
      orderItems: [{
        id: 0,
        orderId: 0,
        productId: cart[0].id,
        product: cart[0],
        price: cart[0].price,
        quantity: 1,
        total: cart[0].price,
      }],
      total: 1,
      status: 'waiting',
      lastUpdate: moment().format()
    }
    const token = localStorage.getItem('access_token')
    createNewOrder(token, order)
      .then(res => res.json())
      .then(data => {
        openSnackbar(`Order created!`)
        setTimeout(() => {
          clearCart()
          history.push('/orders')
        }, 1500)
      })
      .catch(error => console.log(error))
  }
  handleChange = (name, value) => {
    this.setState({
      [name]: value
    })
  }
  render() {
    const { deliveryAddress, contact } = this.state
    return (
      <CartDisplay
        placeOrder={this.placeOrder}
        handleChange={this.handleChange}
        deliveryAddress={deliveryAddress}
        contact={contact}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  cart: state.CartReducer.cart,
})

const mapDispatchToProps = (dispatch) => ({
  openSnackbar: (text) => (dispatch(openSnackbarAction(text))),
  clearCart: () => (dispatch(clearCartAction())),
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Cart))