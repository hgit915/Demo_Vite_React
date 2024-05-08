import axios from '../request'

/**
 * 會員登入
 * @param {object} payload 登入資料
 * @returns {promise}
 */
export const login = (payload) => axios.post('/user/login', payload)

/**
 * 檢查是否登入
 * @returns {promise}
 */
export const checkLogin = () => axios.get('/user/check')
