import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getOrders } from '@/services/apis/dashboard'

/**
 * 查詢使用者的訂單
 */
export const fetchUserOrders = createAsyncThunk('dashboard/fetchUserOrders', async (param, { rejectWithValue }) => {
  try {
    let res = await getOrders()
    return res.result
  } catch (error) {
    return rejectWithValue(error)
  }
})

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: {
    orderInfo: '', //訂單資訊
    errMsg: '',
  },

  reducers: {
    setErrMsg(state, { payload }) {
      state.errMsg = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserOrders.fulfilled, (state, { payload }) => {
      state.orderInfo = payload.reverse()
    })
    builder.addCase(fetchUserOrders.rejected, (state, { payload }) => {
      state.errMsg = payload
    })
  },
})

export const { setErrMsg } = dashboardSlice.actions
export default dashboardSlice.reducer
