import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Drawer from 'material-ui/Drawer'
import { withStyles } from 'material-ui/styles'

import DrawerItems from './DrawerItems'
import { drawerWidth } from './sizeConfig'

const styles = (theme) => ({
  drawerPaper: {
    position: 'absolute',
    width: drawerWidth,
    height: '100%',
    backgroundColor: theme.palette.primary.main
  }
})

class DrawerContent extends Component {
  render() {
    const { classes, open } = this.props
    return (
      <Drawer
        variant="persistent"
        classes={{
          paper: classes.drawerPaper,
        }}
        open={open}>
        
        <DrawerItems />
      </Drawer>
    )
  }
}

DrawerContent.propTypes = {
  open: PropTypes.bool.isRequired,
}

export default withStyles(styles)(DrawerContent)