import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const commonSlice = createSlice({
  name: 'common',
  initialState: {
    isLoading: false,
    errMsg: '',
  },

  reducers: {
    setErrMsg(state, { payload }) {
      state.errMsg = payload
    },
    setIsLoading(state, { payload }) {
      state.isLoading = payload
    },
  },
})

export const { setErrMsg, setIsLoading } = commonSlice.actions
export default commonSlice.reducer
