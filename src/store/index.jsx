import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./modules/home";
import loginReducer from "./modules/login/index";
const store = configureStore({
  reducer: {
    home: homeReducer,
    login: loginReducer,
  },
});

export default store;
