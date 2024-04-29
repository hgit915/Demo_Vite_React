import React, { Suspense } from "react"; // 引入 React.StrictMode 需要
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { ThemeProvider } from "@mui/system";

import { Provider } from "react-redux";
import store from "@/store/index.jsx";

import App from "./App.jsx";
import "normalize.css";
import "@/assets/styles/index.scss";
import theme from "./assets/theme/index.js";

// 建立 React DOM 並渲染
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Suspense fallback="loading.......">
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    </Provider>
  </Suspense>
);
