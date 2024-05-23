import { configureStore } from '@reduxjs/toolkit'
import roomReducer from './modules/room'
import userReducer from './modules/user'
import signReducer from './modules/sign'
import orderReducer from './modules/order'

const store = configureStore({
  reducer: {
    room: roomReducer,
    user: userReducer,
    sign: signReducer,
    order: orderReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
