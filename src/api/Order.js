import { HEADER, URL, createAuth } from './FetchConfig'

export const createNewOrder = (token, cart) => (
  fetch(`${URL}/Order`, {
    method: 'POST',
    headers: {
      ...HEADER,
      'Authorization': createAuth(token),
    },
    body: JSON.stringify(cart)
  })
)

export const getCustomerOrders = (token) => (
  fetch(`${URL}/Order/customer`, {
    method: 'GET',
    headers: {
      ...HEADER,
      'Authorization': createAuth(token),
    },
  })
)