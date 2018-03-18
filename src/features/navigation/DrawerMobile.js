import React, { Component } from 'react'
import Drawer from 'material-ui/Drawer'
import { withStyles } from 'material-ui/styles'
import PropTypes from 'prop-types'

import DrawerItems from './DrawerItems'
import { drawerWidth } from './sizeConfig'

const styles = (theme) => ({
  drawerPaper: {
    position: 'absolute',
    width: drawerWidth,
    height: '100%',
    backgroundColor: theme.palette.primary.dark,
    [theme.breakpoints.down('xs')]: {
      width: drawerWidth - 50,
    }
  }, newDiv: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
})

class DrawerMobile extends Component {
  render() {
    const { classes, open, onClose } = this.props
    return (
      <Drawer
        variant='temporary'
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
        onClose={onClose}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <div onClick={onClose} className={classes.newDiv}>
          <DrawerItems />
        </div>
      </Drawer>

    )
  }
}

DrawerMobile.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
}

export default withStyles(styles)(DrawerMobile)