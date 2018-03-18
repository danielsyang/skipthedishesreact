import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import TextField from 'material-ui/TextField'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'
import Snackbar from 'material-ui/Snackbar'

import { authenticateUser } from '../../api/Customer'

const styles = (theme) => ({
  loginContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 500,
    margin: '40px auto',
    width: 'calc(100% - 32px)',
  }
})

class Login extends Component {
  state = {
    login: '',
    password: '',
    openSnackbar: false,
    status: '',
  }
  handleChange = (name) => (event) => {
    this.setState({
      [name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    const { login, password } = this.state
    const credentials = { email: login, password }

    authenticateUser(credentials)
      .then((res) => (res.json()))
      .then((data) => {
        if (data.error) {
          this.setState({
            openSnackbar: true,
            status: 'Wrong credentials.',
          })
        } else {
          localStorage.setItem('access_token', JSON.stringify(data))
          this.props.history.push('/products')
        }

      })
      .catch((error) => console.log(error))


  }
  render() {
    const { classes } = this.props
    const { login, password, openSnackbar, status } = this.state
    return (
      <div>
        <form className={classes.loginContainer} onSubmit={this.handleSubmit}>
          <Typography variant='title'>Skip the dishes</Typography>
          <TextField
            name='login'
            require='true'
            label='Login'
            type='text'
            margin='normal'
            value={login}
            onChange={this.handleChange('login')}
          />

          <TextField
            name='password'
            require='true'
            label='Password'
            type='password'
            margin='normal'
            value={password}
            onChange={this.handleChange('password')}
          />

          <Button type='submit' variant='raised' color='primary'> Login </Button>
          <Link to='/register' >Create new account</Link>
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

export default withStyles(styles)(Login)