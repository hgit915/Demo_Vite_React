import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createOrder, sendOrderEmail } from '@/services/apis/order'

export const createOrderAction = createAsyncThunk('order/createOrder', async (param, { rejectWithValue }) => {
  try {
    let res = await createOrder(param)

    // 發送訂購成功信：
    // 1. 會員、訂購人信箱相同
    // 2. 會員、訂購人信箱不同，則寄給訂購人、cc 會員
    let sendResult = await sendOrderEmail({ email: param.userInfo.email, name: param.userInfo.name })

    return res.result
  } catch (error) {
    return rejectWithValue(error)
  }
})

const orderSlice = createSlice({
  name: 'sign',
  initialState: {
    orderInfo: '',
    errMsg: '',
    customerInfo: '',
    orderSuccess: false,
  },

  reducers: {
    setErrMsg(state, { payload }) {
      state.errMsg = payload
      state.orderSuccess = false
    },
    setCustomerInfo(state, { payload }) {
      state.customerInfo = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createOrderAction.fulfilled, (state, { payload }) => {
      state.orderInfo = payload
      state.orderSuccess = true
    })
    builder.addCase(createOrderAction.rejected, (state, { payload }) => {
      state.errMsg = payload
      state.orderSuccess = false
    })
  },
})

export const { setErrMsg, setCustomerInfo } = orderSlice.actions
export default orderSlice.reducer
