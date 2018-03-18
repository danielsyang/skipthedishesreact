import {
  GET_ALL_STORES,
} from './StoreActionsName'

const INITIAL_STATE = {
  stores: []
}

function StoreReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_ALL_STORES:
      return { ...state, stores: action.stores }
    default:
      return state
  }
}

export default StoreReducer