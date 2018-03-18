import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import PropTypes from 'prop-types'
import TextField from 'material-ui/TextField'

const styles = (theme) => ({
  cardStyle: {
    margin: '60px auto auto',
    width: 'calc(100% - 32px)'
  }, buttonStyle: {
    marginLeft: 'auto',
  }, textMargin: {
    marginRight: 20,
  }
})

class CartDisplay extends Component {
  state = {
    moreInfo: false,
  }
  handleMoreInfo = () => { this.setState({ moreInfo: !this.state.moreInfo }) }
  handleChange = (name) => (event) => {
    const { handleChange } = this.props
    const value = event.target.value
    handleChange(name, value)
  }
  render() {
    const { classes, cart, placeOrder, contact, deliveryAddress, } = this.props
    const { moreInfo } = this.state
    return (

      <Card className={classes.cardStyle}>
        {
          cart.length === 0 &&
          <CardContent >
            <Typography variant='title'>{`Your cart is empty.`}</Typography>
          </CardContent>
        }
        {cart.map((elem, index) => (
          <CardContent key={index}>
            <Typography variant='title'>{elem.name}</Typography>
            <Typography variant='caption'>{elem.description}</Typography>
            <Typography >{`$${elem.price}`}</Typography>
          </CardContent>
        ))}
        {moreInfo &&
          <CardContent>
            <TextField
              name='deliveryAddress'
              label='Delivery address'
              margin='normal'
              className={classes.textMargin}
              value={deliveryAddress}
              onChange={this.handleChange('deliveryAddress')}
            />
            <TextField
              name='contact'
              label='Contact'
              margin='normal'
              value={contact}
              onChange={this.handleChange('contact')}
            />
          </CardContent>
        }
        {
          cart.length !== 0 &&
          <CardActions className={classes.cardAction}>
            <Button
              size='small'
              variant='raised'
              color={moreInfo ? 'secondary' : 'primary'}
              className={classes.buttonStyle}
              onClick={this.handleMoreInfo}>
              {moreInfo ? 'Close' : 'Place order'}
            </Button>
            {moreInfo &&
              <Button
                size='small'
                variant='raised'
                color='primary'
                onClick={placeOrder}>
                Done!
              </Button>
            }
          </CardActions>
        }
      </Card>
    )
  }
}

CartDisplay.propTypes = {
  placeOrder: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  contact: PropTypes.string.isRequired,
}

const mapStateToProps = (state) => ({
  cart: state.CartReducer.cart,
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(CartDisplay))