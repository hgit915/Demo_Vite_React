import Cookies from 'js-cookie'

let key = 'loginToken'

export const getCookie = () => {
  return Cookies.get(key)
}

export const setCookie = (token) => {
  return Cookies.set(key, token)
}

export const removeCookie = () => {
  return Cookies.remove(key)
}
