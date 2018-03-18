import React, { Component } from 'react'
import { withStyles } from 'material-ui/styles'
import { withRouter } from 'react-router-dom'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import IconButton from 'material-ui/IconButton'
import Hidden from 'material-ui/Hidden'

import { drawerWidth, toolbarHeight } from './sizeConfig'

const styles = theme => ({
  appBar: {
    height: toolbarHeight,
    backgroundColor: 'white',
    boxShadow: 'none',
    borderBottom: `1px solid #e5e5e5`,
    position: 'absolute',
    marginLeft: 0,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
    }
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      marginLeft: 0,
    }
  },
  toolbar: {
    minHeight: toolbarHeight,
    height: 'inherit',
    display: 'flex',
    paddingLeft: 12,
  },
  syncText: {
    color: theme.palette.text.main,
    fontSize: 12,
    lineHeight: 1,
    cursor: 'pointer',
    marginLeft: 'auto',
  }
})

class MainAppBar extends Component {
  render() {
    const { classes, hamburgerAction, drawerOpen, hamburgerActionMobile } = this.props
    return (
      <AppBar className={classNames(classes.appBar, { [classes.appBarShift]: drawerOpen })}>
        <Toolbar classes={{ root: classes.toolbar }}>
          <Hidden smDown>
            <IconButton
              onClick={hamburgerAction}>
              <i className='material-icons'>dehaze</i>              
            </IconButton>
          </Hidden>

          <Hidden mdUp>
            <IconButton
              onClick={hamburgerActionMobile}>
              <i className='material-icons'>dehaze</i>
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
    )
  }
}

MainAppBar.propTypes = {
  drawerOpen: PropTypes.bool.isRequired,
  classes: PropTypes.object.isRequired,
  hamburgerAction: PropTypes.func.isRequired,
  hamburgerActionMobile: PropTypes.func.isRequired,
}

export default withRouter(withStyles(styles)(MainAppBar))