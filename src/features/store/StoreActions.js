import {
  GET_ALL_STORES,
} from './StoreActionsName'

export const getAllStoresAction = (stores) => ({
  type: GET_ALL_STORES,
  stores
})