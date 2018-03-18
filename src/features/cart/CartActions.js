import {
  ADD_TO_CART,
  CLEAR_CART,
} from './CartActionsName'

export const addToCartAction = (product) => ({
  type: ADD_TO_CART,
  product
})

export const clearCartAction = () => ({
  type: CLEAR_CART
})