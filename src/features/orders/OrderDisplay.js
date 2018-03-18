import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import moment from 'moment'
import Button from 'material-ui/Button'

import { createNewOrder } from '../../api/Order'

const styles = (theme) => ({
  orderContainer: {
    width: 'calc(100% - 32px)',
    margin: 'auto auto 20px',
  }, cardContainer: {
    width: 'calc(100% - 32px)',
    margin: '60px auto auto',
  }, detailLine: {
    fontSize: 12,
    color: 'rgba(0, 0, 0, 0.54)',
  }, buttonStyle: {
    marginLeft: 'auto',
  }
})

class OrderDisplay extends Component {
  handleCancelOrder = (order) => (event) => {
    event.preventDefault()
    const updatedOrder = {
      ...order,
      status: 'canceled',
      lastUpdate: moment().format(),
    }
    const token = localStorage.getItem('access_token')
    createNewOrder(token, updatedOrder)
      .then((res) => (res.json()))
      .then((data) => console.log(data))
      .catch(error => console.log(error))
  }
  render() {
    const { classes, orders, stores } = this.props
    if (orders.length === 0) {
      return (
        <Card className={classes.cardContainer}>
          <CardContent>
            <Typography variant='title'>You don't have any order</Typography>
          </CardContent>
        </Card>
      )
    }
    return (
      <div className={classes.orderContainer}>
        {orders.map((elem, index) => {
          const product = stores.find((store) => (store.id === elem.storeId))
          const finalPrice = elem.orderItems.reduce((a, b) =>
            (a.price && b.price) ? (a.price && b.price) : b.price, 0)
          return (
            <Card key={index}>
              <CardContent>
                <Typography variant='title'>{product.name}</Typography>
                <Typography variant='subheading'>Address:
                    <span className={classes.detailLine}>{`${elem.deliveryAddress}`}</span>
                </Typography>
                <Typography variant='subheading'>Date:
                    <span className={classes.detailLine}>{`${moment(elem.date).format('LL')}`}</span>
                </Typography>

                <Typography variant='subheading'>Status:
                    <span className={classes.detailLine}>{`${elem.status}`}</span>
                </Typography>

                <Typography variant='subheading'>Total:
                    <span className={classes.detailLine}>{`$${finalPrice}`}</span>
                </Typography>
              </CardContent>
              <CardActions >
                <Button
                  size='small'
                  variant='raised'
                  color='secondary'
                  className={classes.buttonStyle}
                  onClick={this.handleCancelOrder(elem)}>
                  Cancel order
            </Button>
              </CardActions>
            </Card>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  orders: state.OrderReducer.orders,
  products: state.ProductsReducer.products,
  stores: state.StoreReducer.stores,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(OrderDisplay))