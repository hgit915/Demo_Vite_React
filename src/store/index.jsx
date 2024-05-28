import { combineReducers, configureStore } from '@reduxjs/toolkit'
import roomReducer from './modules/room'
import userReducer from './modules/user'
import signReducer from './modules/sign'
import orderReducer from './modules/order'
import dashboardReducer from './modules/dashboard'
import commonReducer from './modules/common'

const combinedReducer = combineReducers({
  room: roomReducer,
  user: userReducer,
  sign: signReducer,
  order: orderReducer,
  dashboard: dashboardReducer,
  common: commonReducer,
})

// 偵測特定的 action 做處理
const rootReducer = (state, action) => {
  // 登出
  if (action.type === 'user/setLogout') {
    state = undefined
  }
  return combinedReducer(state, action)
}

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export default store
