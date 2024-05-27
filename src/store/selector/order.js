import { createSelector } from 'reselect'

const orderSelector = (state) => state.order
export const getOrderData = createSelector([orderSelector], (order) => ({
  orderInfo: order.orderInfo,
  orderErrMsg: order.errMsg,
  customerInfo: order.customerInfo,
  orderSuccess: order.orderSuccess,
}))
