export const URL = 'http://api-vanhack-event-sp.azurewebsites.net/api/v1'

export const HEADER = {
  'accept': 'application/json',
  'Content-Type': 'application/json',
}

export const createAuth = (token) => {
  const tokenHelper = token.replace(/"/g, '')
  return `Bearer ${tokenHelper}`
}