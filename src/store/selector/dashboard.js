import { createSelector } from 'reselect'

const dashboardSelector = (state) => state.dashboard
export const getUserOrdersData = createSelector([dashboardSelector], (dashboard) => ({
  orderInfo: dashboard.orderInfo,
  errMsg: dashboard.errMsg,
}))
