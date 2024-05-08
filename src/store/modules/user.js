import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { login, checkLogin } from 'apis/user'
import { setCookie, removeCookie } from '@/utils/cookies'

// 進行登入
export const loginAction = createAsyncThunk('user/loginAction', async (param, { rejectWithValue }) => {
  try {
    let res = await login(param)
    return res
  } catch (error) {
    return rejectWithValue(error)
  }
})

// 身分驗證
export const checkLoginAction = createAsyncThunk('user/checkLogin', async (param, { rejectWithValue }) => {
  try {
    let res = await checkLogin()
    console.log('-----res-----')
    console.log(res)
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
      setCookie(payload.token)
    },
    setLogout(state) {
      state.profile = {}
      state.isLogin = false
      state.errMsg = ''
      removeCookie()
    },
    setErrMsg(state, { payload }) {
      state.errMsg = payload
    },
  },
  // listen axios : pending / fulfilled / rejected
  extraReducers: (builder) => {
    builder.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.profile = payload
      state.isLogin = true
      state.errMsg = ''
      setCookie(payload.token)
    })
    builder.addCase(checkLoginAction.fulfilled, (state, { payload }) => {
      state.profile.token = payload.token
      state.isLogin = true
    })
    builder.addCase(loginAction.rejected, (state, action) => {
      state.errMsg = action.payload || '登入失敗，請稍後再試'
      removeCookie()
    })
    builder.addCase(checkLoginAction.rejected, (state, { payload }) => {
      setLogout()
    })
  },
})

export const { setLogin, setLogout, setErrMsg } = userSlice.actions
export default userSlice.reducer
