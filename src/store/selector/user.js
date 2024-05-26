import { createSelector } from 'reselect'

const userSelector = (state) => state.user
export const getUserData = createSelector([userSelector], (user) => ({
  userName: user.profile.name,
  userInfo: user.profile,
  errMsg: user.errMsg,
  isLogin: user.isLogin,
  token: user.token,
}))
