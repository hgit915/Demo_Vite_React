import { createSelector } from 'reselect'

const commonSelector = (state) => state.common
export const getCommonData = createSelector([commonSelector], (common) => ({
  isLoading: common.isLoading,
  errMsg: common.errMsg,
}))
