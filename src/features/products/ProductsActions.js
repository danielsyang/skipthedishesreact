import { GET_ALL_PRODUCTS } from './ProductsActionNames'

export const getAllProductsAction = (data) => ({
  type: GET_ALL_PRODUCTS,
  data
})
