import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import moment from 'moment'
import Snackbar from 'material-ui/Snackbar'

import { createNewUser } from '../../api/Customer'

const styles = (theme) => ({
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    margin: '40px auto',
    width: 'calc(100% - 32px)',
  }
})

class NewLogin extends Component {
  state = {
    email: '',
    password: '',
    address: '',
    name: '',
    openSnackbar: false,
    status: '',
  }
  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    })
  }
  handleClose = () => { this.setState({ openSnackbar: false, }) }
  handleSubmit = (event) => {
    event.preventDefault()
    const { email, password, address, name } = this.state
    const newPerson = {
      email,
      password,
      address,
      name,
      id: 0,
      creation: moment().format(),
    }

    createNewUser(newPerson)
      .then((res) => (res.json()))
      .then((data) => {
        if (data.error) {
          this.setState({
            openSnackbar: true,
            status: 'Error creating user.',
          })

        } else {
          localStorage.setItem('access_token', JSON.stringify(data))
          this.props.history.push('/products')
        }
      })
      .catch((error) => {

        console.log(error)
      })

  }
  render() {
    const { classes } = this.props
    const { login, password, name, address, openSnackbar, status } = this.state
    return (
      <div>
        <form className={classes.loginContainer} onSubmit={this.handleSubmit}>
          <Typography variant='title'>Register</Typography>
          <TextField
            name='login'
            required
            label='E-mail'
            type='email'
            margin='normal'
            value={login}
            onChange={this.handleChange('email')}
          />

          <TextField
            name='password'
            required
            label='Password'
            type='password'
            margin='normal'
            value={password}
            onChange={this.handleChange('password')}
          />

          <TextField
            name='name'
            required
            label='Name'
            type='text'
            margin='normal'
            value={name}
            onChange={this.handleChange('name')}
          />

          <TextField
            name='address'
            required
            label='Address'
            type='text'
            margin='normal'
            value={address}
            onChange={this.handleChange('address')}
          />

          <Button type='submit' variant='raised' color='primary'> Register </Button>
        </form>

        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={openSnackbar}
          autoHideDuration={1000}
          onClose={this.handleClose}
          SnackbarContentProps={{
            'aria-describedby': 'message-id',
          }}
          message={<span id='message-id'>{status}</span>}
        />

      </div>
    )
  }
}

export default withStyles(styles)(NewLogin)