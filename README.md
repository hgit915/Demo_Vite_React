# Demo_vite_React

使用 vite 搭配 React 打造訂房網站

## 網頁入口

> 請先點選「啟動 Server」待 server 啟動並於畫面回傳訊息後，再點選 Joy Hotel 訂房網

- [啟動 Server](https://typescript-api-8f0g.onrender.com/)
- [Joy Hotel 訂房網](https://hgit915.github.io/Demo_Vite_React/#/home)

---

## 專案設定

### 1. 架構

- [React](https://de.react.dev/) - 前端框架
- [Material UI](https://mui.com/material-ui/) - React UI Framework
- [styled-component](https://dev.to/rasaf_ibrahim/styled-components-in-material-ui-mui-with-styled-utility-3l3j)- 使用 Material UI 內的 styled-component
- [redux toolkit](https://redux-toolkit.js.org/) - 狀態管理，解決 redux 寫法過於繁瑣
- [GitHub Pages](https://pages.github.com/) - 部屬工具
- [Render Server](https://render.com/) - Trigger Server (免費資源過 15 分鐘會關機)

### 2. 目錄

```
|-- public : 靜態檔案，不編譯
|-- src：會進行編譯
      |-- assets：靜態檔案
            |-- image：圖片
            |-- styles：樣式全局設定
            |-- theme：樣式主題設定
      |-- components：元件
      |-- router：路由設定
      |-- services：axios
            |-- api：前端使用的 API
            |-- request：axios、endPoint 設定
      |-- store：
            |-- module：redux toolkit 模組
            |-- selector：reselect 模組
            |-- index.jsx : 整合 reducer
      |-- utils：工具庫
      |-- views：page view 入口
      |-- App.jsx：網頁進入點
      |-- index.jsx：網頁進入點
|-- index.html：src 編譯完的結果

```

### 3. 環境設定

- 安裝 modules

```sh
npm install
```

- 本機啟動 server

```sh
npm run dev
```

- 部屬至 github

```sh
npm run build
npm run deploy
```

### 4. Coding Style

- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
