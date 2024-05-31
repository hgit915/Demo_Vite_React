import { createSelector } from 'reselect'

const signSelector = (state) => state.sign
export const getSignData = createSelector([signSelector], (sign) => ({
  allErrMsg: sign.errMsg,
  showFinal: sign.showFinal,
}))
