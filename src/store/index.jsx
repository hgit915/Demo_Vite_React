import { configureStore } from '@reduxjs/toolkit'
import roomReducer from './modules/room'
import userReducer from './modules/user'
import signReducer from './modules/sign'

const store = configureStore({
  reducer: {
    room: roomReducer,
    user: userReducer,
    sign: signReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
