import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { createOrder, sendOrderEmail, getOrderById } from '@/services/apis/order'

/**
 * 建立訂單
 */
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

/**
 * 查詢訂單
 */
export const fetchOrderByIdAction = createAsyncThunk('order/fetchOrderById', async (param, { rejectWithValue }) => {
  try {
    let res = await getOrderById(param)
    return res.result
  } catch (error) {
    return rejectWithValue(error)
  }
})

const orderSlice = createSlice({
  name: 'order',
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
    builder.addCase(fetchOrderByIdAction.fulfilled, (state, { payload }) => {
      state.orderInfo = payload
    })
    builder.addCase(fetchOrderByIdAction.rejected, (state, { payload }) => {
      state.errMsg = payload
    })
  },
})

export const { setErrMsg, setCustomerInfo } = orderSlice.actions
export default orderSlice.reducer
