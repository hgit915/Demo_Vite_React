import axios from '../request'

/**
 * 取得房型名單
 * @returns {promise}
 */
export const getRooms = () => axios.get('/rooms')

/**
 * 取得房型資訊
 * @returns {promise}
 */
export const getRoomInfo = (roomId) => axios.get(`rooms/${roomId}`)
