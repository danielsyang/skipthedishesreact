import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import classNames from 'classnames'
import Snackbar from 'material-ui/Snackbar'
import { connect } from 'react-redux'

import MainAppBar from './MainAppBar'
import DrawerApp from './DrawerApp'
import { drawerWidth, toolbarHeight } from './sizeConfig'
import { closeSnackbarAction } from '../snackbar/SnackbarActions'

const styles = (theme) => ({
  content: {
    width: '100%',
    height: `calc(100% - ${toolbarHeight}px)`,
    marginTop: toolbarHeight,
    marginLeft: 0,
    backgroundColor: theme.palette.background.main,
    [theme.breakpoints.down('sm')]: {
      width: `100%`,
      marginLeft: 0,
    },
  }, drawerOpen: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    [theme.breakpoints.down('sm')]: {
      width: `100%`,
      marginLeft: 0,
    },
  }, root: {
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
})

class Navigation extends Component {
  state = {
    open: true,
    mobileOpen: false,
  }
  clickHamburgerIcon = () => {
    const actual = this.state.open
    this.setState({
      open: !actual,
    })
  }
  clickHamburguerMobile = () => {
    const actual = this.state.mobileOpen
    this.setState({
      mobileOpen: !actual,
    })
  }
  render() {
    const { classes, children, snackbar, closeSnackbar } = this.props
    const { open, mobileOpen } = this.state
    return (
      <div className={classes.root}>
        <MainAppBar hamburgerAction={this.clickHamburgerIcon} drawerOpen={open} hamburgerActionMobile={this.clickHamburguerMobile} />
        <DrawerApp openDrawer={open} mobileOpen={mobileOpen} hamburgerActionMobile={this.clickHamburguerMobile} />
        <main className={classNames(classes.content, { [classes.drawerOpen]: open })}>
          {children}
          <Snackbar
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={snackbar.open}
            autoHideDuration={1000}
            onClose={closeSnackbar}
            SnackbarContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id='message-id'>{snackbar.text}</span>}
          />
        </main>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  snackbar: state.SnackbarReducer,
})

const mapDispatchToProps = (dispatch) => ({
  closeSnackbar: () => (dispatch(closeSnackbarAction())),
})


export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Navigation))