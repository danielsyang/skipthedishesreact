import { combineReducers } from 'redux'

import ProductsReducer from '../features/products/ProductsReducer'
import CartReducer from '../features/cart/CartReducer'
import OrderReducer from '../features/orders/OrderReducer'
import StoreReducer from '../features/store/StoreReducer'
import SnackbarReducer from '../features/snackbar/SnackbarReducer'

export default combineReducers({
  ProductsReducer,
  CartReducer,
  OrderReducer,
  StoreReducer,
  SnackbarReducer,
})