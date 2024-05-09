import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { signUp } from '@/services/apis/user'

export const signUpAction = createAsyncThunk('user/signUp', async (param, { rejectWithValue }) => {
  try {
    let res = await signUp(param)
    return res
  } catch (error) {
    return rejectWithValue(error)
  }
})

const signSlice = createSlice({
  name: 'sign',
  initialState: {
    profile: {},
    errMsg: '',
    showFinal: false,
  },

  reducers: {
    setErrMsg(state, { payload }) {
      state.errMsg = payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signUpAction.fulfilled, (state) => {
      state.showFinal = true
    })
    builder.addCase(signUpAction.rejected, (state, { payload }) => {
      state.errMsg = payload
    })
  },
})

export const { setErrMsg } = signSlice.actions
export default signSlice.reducer
