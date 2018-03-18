import { HEADER, URL } from './FetchConfig'

export const getAllProducts = () => (
  fetch(`${URL}/Product`, {
    headers: {
      ...HEADER
    }
  })
)