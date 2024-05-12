import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home'
import userReducer from './modules/user'
import signReducer from './modules/sign'

const store = configureStore({
  reducer: {
    home: homeReducer,
    user: userReducer,
    sign: signReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
