import { getAllProducts } from '../../api/Products'
import { getAllProductsAction } from './ProductsActions'

export const getAllProductsThunk = (data) => (dispatch) => (
  getAllProducts()
    .then((res) => (res.json()))
    .then((data) => (dispatch(getAllProductsAction(data))))
)

