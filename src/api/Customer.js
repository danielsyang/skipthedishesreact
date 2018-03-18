import { HEADER, URL } from './FetchConfig'

export const createNewUser = (register) => (
  fetch(`${URL}/Customer`, {
    method: 'POST',
    headers: {
      ...HEADER,
    },
    body: JSON.stringify(register)
  })
)

export const authenticateUser = (credentials) => (
  fetch(`${URL}/Customer/auth?email=${encodeURIComponent(credentials.email)}&password=${encodeURIComponent(credentials.password)}`, {
    method: 'POST',
    headers: {
      ...HEADER,
    },
  })
)