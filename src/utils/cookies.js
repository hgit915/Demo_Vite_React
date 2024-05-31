import Cookies from 'js-cookie'

let key = 'loginToken'

export const getCookie = () => {
  return Cookies.get(key)
}

export const setCookie = (token, isExpired) => {
  let expired = {}
  if (isExpired) expired = { expires: 3 }
  return Cookies.set(key, token, expired)
}

export const removeCookie = () => {
  return Cookies.remove(key)
}
