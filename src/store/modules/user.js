import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login } from 'apis/user'

// 非同步處理
export const loginAction = createAsyncThunk('user/loginAction', async (param, { rejectWithValue }) => {
  try {
    let res = await login(param)
    return res
  } catch (error) {
    return rejectWithValue(error)
  }
})

const userSlice = createSlice({
  name: 'user', // action name
  initialState: {
    profile: {},
    errMsg: '',
    isLogin: false,
  },
  reducers: {
    // 要更新 state 的 fn
    setLogin(state, { payload }) {
      state.profile = payload
      state.isLogin = true
    },
    setLogout(state) {
      state.profile = {}
      state.isLogin = false
      state.errMsg = ''
    },
    setErrMsg(state, { payload }) {
      state.errMsg = payload
    },
  },
  // listen axios : pending / fulfilled / rejected
  extraReducers: builder => {
    builder.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.profile = payload
      state.isLogin = true
      state.errMsg = ''
    })
    builder.addCase(loginAction.rejected, (state, { payload }) => {
      state.errMsg = payload || '登入失敗，請稍後再試'
    })
  },
})

export const { setLogin, setLogout, setErrMsg } = userSlice.actions
export default userSlice.reducer
