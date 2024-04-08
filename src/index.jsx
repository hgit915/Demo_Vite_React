import React from "react"; // 引入 React.StrictMode 需要
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import "normalize.css";
import "@/assets/styles/index.scss";

// 建立 React DOM 並渲染
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 嚴格模式只運作在開發環境，避免常見錯誤、隱藏問題的發生
  <React.StrictMode>
    <App />
  </React.StrictMode>
);