import { HEADER, URL } from './FetchConfig'

export const getAllStores = () => (
  fetch(`${URL}/Store`, {
    headers: {
      ...HEADER
    }
  })
)