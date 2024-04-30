import axios from "../request";

/**
 * 取得會員的追蹤名單
 * @returns {promise}
 */
export const getTracks = () => axios.get("/home/highscore");

export const getGoodPrice = () => axios.get("/home/goodprice");
