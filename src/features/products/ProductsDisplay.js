import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'

import { addToCartAction } from '../cart/CartActions'
import { openSnackbarAction } from '../snackbar/SnackbarActions'

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 700,
    margin: 'auto',
    width: 'calc(100% - 32px)',
  }, cardStyle: {
    margin: '0 32px 32px'
  }, cardAction: {
    borderTop: '1px solid #e5e5e5',
    display: 'flex',
  }, buttonStyle: {
    marginLeft: 'auto',
  }
})

class ProductsDisplay extends Component {
  handleAddToCart = (id) => (event) => {
    event.preventDefault()
    const { products, addToCart, openSnackbar } = this.props
    const elem = products.find((elem) => (elem.id === id))
    addToCart(elem)
    openSnackbar(`Product ${elem.name} added to the cart.`)
  }
  render() {
    const { products, classes } = this.props
    return (
      <div className={classes.container}>
        {
          products.map((elem) => (
            <Card key={elem.id} className={classes.cardStyle}>
              <CardContent>
                <Typography variant='title'>{elem.name}</Typography>
                <Typography variant='caption'>{elem.description}</Typography>
                <Typography >{`$${elem.price}`}</Typography>
              </CardContent>
              <CardActions className={classes.cardAction}>
                <Button
                  size='small'
                  variant='raised'
                  color='primary'
                  className={classes.buttonStyle}
                  onClick={this.handleAddToCart(elem.id)}>Add to cart</Button>
              </CardActions>
            </Card>
          ))
        }
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  products: state.ProductsReducer.products,
})

const mapDispatchToProps = (dispatch) => ({
  addToCart: (product) => (dispatch(addToCartAction(product))),
  openSnackbar: (text) => (dispatch(openSnackbarAction(text))),
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ProductsDisplay))