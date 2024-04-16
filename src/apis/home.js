import axios from "@/services";

/**
 * 取得會員的追蹤名單
 * @returns {promise}
 */
export const getTracks = () => axios.get("/home/highscore");
