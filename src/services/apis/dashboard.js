import axios from '../request'

/**
 * [訂單] - 查詢 USER 的所屬訂單
 * @param {object} payload 訂購人的名稱、信箱
 */
export const getOrders = () => axios.get(`/orders`)
