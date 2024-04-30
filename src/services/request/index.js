import axios from "axios";
import BASE_URL from "./config.js";

// 設定 config
const instance = axios.create({
  baseURL: `${BASE_URL}/`,
  timeout: 5000, // 超時時間設置
});

// request 攔截器：新增共用參數
instance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// response 攔截器：處理成功、失敗的訊息
instance.interceptors.response.use(
  (res) => {
    // 成功
    return res.data;
  },
  (error) => {
    let message;
    let status = error.response.status;

    switch (status) {
      case "401":
        message = "token 過期";
        break;
      case "403":
        message = "無權限";
        break;
      case "404":
        message = "請求失敗";
        break;
      case "500":
        message = "伺服器失敗";
        break;
      default:
        message = "網路網路出現問題";
        bareak;
    }
    return Promise.reject(error);
  }
);

export default instance;
