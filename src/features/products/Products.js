import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getAllProductsThunk } from './ProductsThunk'
import ProductsDisplay from './ProductsDisplay'

class Products extends Component {
  handleClose = () => {
    this.setState({ open: false })
  }
  componentDidMount() {
    const { getAllProducts } = this.props
    getAllProducts()
      .catch((error) => console.log(error))
  }
  render() {
    return (
      <ProductsDisplay />
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
  getAllProducts: () => (dispatch(getAllProductsThunk()))
})

export default connect(mapStateToProps, mapDispatchToProps)(Products)