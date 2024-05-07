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
    // const token = store.getState().session.token;
    // config.headers.Authorization =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjMwYWMwMWQ0YWFkMzRjYmMzN2FhMzkiLCJpYXQiOjE3MTQ0NjU3OTQsImV4cCI6MTcxNTA3MDU5NH0.xYHDWQ-MTp_jtySep5nG9-RctlEJN2SlMdq3x55P3aQ";
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
    return Promise.reject(error.response.data.message);
  }
);

export default instance;
