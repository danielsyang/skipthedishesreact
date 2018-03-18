import { getCustomerOrders } from '../../api/Order'
import { getCustomerOrdersAction } from './OrderActions'
import { getAllProducts } from '../../api/Products'
import { getAllProductsAction } from '../products/ProductsActions'
import { getAllStores } from '../../api/Store'
import { getAllStoresAction } from '../store/StoreActions'

export const getCustomerOrdersThunk = (token) => (dispatch) => (
  getAllStores()
    .then((res) => (res.json()))
    .then((data) => dispatch(getAllStoresAction(data)))
    .then(() => getAllProducts()
      .then((res) => (res.json()))
      .then((data) => (dispatch(getAllProductsAction(data))))
      .then(() => (getCustomerOrders(token))
        .then((res) => (res.json()))
        .then((data) => (dispatch(getCustomerOrdersAction(data))))
      ))

)

