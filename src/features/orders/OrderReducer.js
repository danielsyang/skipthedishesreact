import {
  CREATE_ORDER,
  GET_CUSTOMER_ORDERS
} from './OrderActionsName'

const INITIAL_STATE = {
  orders: []
}

function OrderReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_CUSTOMER_ORDERS:
      return { ...state, orders: action.orders }
    case CREATE_ORDER:
      return { ...state, orders: state.orders.concat(action.cart) }
    default:
      return state
  }
}

export default OrderReducer