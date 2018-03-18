import {
  OPEN_SNACKBAR,
  CLOSE_SNACKBAR,
} from './SnackbarActionsName'

export const openSnackbarAction = (text) => ({
  type: OPEN_SNACKBAR,
  text
})

export const closeSnackbarAction = () => ({
  type: CLOSE_SNACKBAR,
})