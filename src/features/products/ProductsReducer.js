import { GET_ALL_PRODUCTS } from './ProductsActionNames'

const INTIAL_STATE = {
  products: []
}

function ProductsReducer(state = INTIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, products: action.data }
    default:
      return state
  }
}

export default ProductsReducer