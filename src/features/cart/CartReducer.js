import {
  ADD_TO_CART,
  CLEAR_CART,
} from './CartActionsName'

// Initial state should be -> cart: {}
const INITIAL_STATE = {
  cart: []
}

function CartReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_CART:
      // That's probably the way to go, but it's almost 8:30PM 
      // and I don't have more time to change the reducer without breaking the app!
      // 
      //   let updatedCart = state.cart
      //   if (updatedCart[action.product.storeId] === undefined) {
      //     updatedCart[action.product.storeId] = []
      //   }
      //   updatedCart[action.product.storeId] = updatedCart[action.product.storeId].concat(action.product)
      //   return { ...state, cart: updatedCart }
      return { ...state, cart: state.cart.concat(action.product) }
    case CLEAR_CART:
      return { ...state, cart: [] }
    default:
      return state
  }
}

export default CartReducer