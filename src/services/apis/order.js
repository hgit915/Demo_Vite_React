import axios from '../request'

/**
 * [訂單] - 建立訂單
 * @param {object} payload 訂單資料
 * @returns {promise}
 */
export const createOrder = (payload) => axios.post('/orders', payload)

/**
 * [訂單] - 寄送訂購成功信
 * @param {object} payload 訂購人的名稱、信箱
 */
export const sendOrderEmail = (payload) => axios.post('/orders/sendOrderEmail', payload)
