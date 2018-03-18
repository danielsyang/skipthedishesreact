import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Hidden from 'material-ui/Hidden'

import DrawerDesktop from './DrawerDesktop'
import DrawerMobile from './DrawerMobile'

class DrawerApp extends Component {
  render() {
    const { openDrawer, mobileOpen, hamburgerActionMobile } = this.props
    return (
      <div>
        <Hidden smDown>
          <DrawerDesktop open={openDrawer} />
        </Hidden>
        <Hidden mdUp>
          <DrawerMobile open={mobileOpen} onClose={hamburgerActionMobile} />
        </Hidden>
      </div>
    )
  }
}

DrawerApp.propTypes = {
  openDrawer: PropTypes.bool.isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  hamburgerActionMobile: PropTypes.func.isRequired,
}

export default DrawerApp