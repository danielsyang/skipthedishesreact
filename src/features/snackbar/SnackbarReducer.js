import {
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
} from './SnackbarActionsName'

const INITIAL_STATE = {
  text: '',
  open: false,
}

function SnackbarReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case OPEN_SNACKBAR:
      return { ...state, text: action.text, open: true }
    case CLOSE_SNACKBAR:
      return { ...state, text: '', open: false }
    default:
      return state
  }
}

export default SnackbarReducer