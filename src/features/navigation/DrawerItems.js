import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import { withStyles } from 'material-ui/styles'
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List'
import classNames from 'classnames'


const styles = (theme) => ({
  highContainer: {
    display: 'flex',
    height: '100%',
  },
  drawerHeader: {
    height: 45,
    minHeight: 45,
    borderBottom: `1px solid #e5e5e5`,
  },
  subContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  title: {
    lineHeight: 1.5,
    padding: '12px 16px',
    margin: 0,
    color: '#e5e5e5',
  },
  listItem: {
    '&:hover': {
      backgroundColor: '#2a3677',
    },
  }, cssWhite: {
    color: 'white',
    margin: 0,
  }, textTransform: {
    textTransform: 'uppercase',
  }, companyTitle: {
    marginTop: 60,
    width: '60%',
  }, companyTitleStyle: {
    fontWeight: 500,
    fontSize: 20,
  }, lineBreak: {
    margin: '0 0 24px',
    width: '100%',
    border: 0,
    borderTop: `1px solid #e5e5e5`
  }
})

class DrawerItems extends Component {
  state = {
    drawerItems: [
      {
        children: [{
          text: 'Product',
          icon: 'local_offer',
          to: '/products'
        }, {
          text: 'Cart',
          icon: 'shopping_cart',
          to: '/cart'
        }, {
          text: 'Orders',
          icon: 'receipt',
          to: '/orders'
        },],
      }]
  }

  handleLogout = () => {
    const { history } = this.props
    localStorage.removeItem('access_token')
    history.push('/')

  }
  render() {
    const { drawerItems } = this.state
    const { classes } = this.props
    return (
      <div className={classes.highContainer}>
        {
          drawerItems.map((elem, index) => {
            const content = elem.children.map((item, itemIndex) => (
              <ListItem button classes={{ root: classNames(classes.listItem) }} component={Link} to={item.to} key={itemIndex}>
                <ListItemIcon className={classes.cssWhite}>
                  <i className='material-icons'>{item.icon}</i>
                </ListItemIcon>
                <ListItemText primary={item.text} classes={{ primary: classNames(classes.cssWhite, classes.textTransform) }} />
              </ListItem>
            ))
            return (
              <div className={classes.subContent} key={index}>
                <hr className={classes.lineBreak} />
                {content}
                <ListItem button classes={{ root: classNames(classes.listItem) }} onClick={this.handleLogout}>
                  <ListItemIcon className={classes.cssWhite}>
                    <i className='material-icons'>exit_to_app</i>
                  </ListItemIcon>
                  <ListItemText primary={'Logout'} classes={{ primary: classes.cssWhite }} />
                </ListItem>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default withRouter(withStyles(styles)(DrawerItems))