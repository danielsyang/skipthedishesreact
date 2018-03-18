import {
  CREATE_ORDER,
  GET_CUSTOMER_ORDERS,
} from './OrderActionsName'

export const createOrderAction = (cart) => ({
  type: CREATE_ORDER,
  cart
})

export const getCustomerOrdersAction = (orders) => ({
  type: GET_CUSTOMER_ORDERS,
  orders
})