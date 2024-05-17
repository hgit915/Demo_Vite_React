import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getRooms, getRoomInfo } from 'apis/rooms'

export const fetchRoomDataAction = createAsyncThunk('room/rooms', async (params) => {
  const res = await getRooms()
  return res.result
})

export const fetchRoomInfoAction = createAsyncThunk('room/roomInfo', async (params) => {
  const res = await getRoomInfo(params)
  return res.result
})

const roomSlice = createSlice({
  name: 'room', // action name
  initialState: {
    rooms: [],
    detail: '',
  },
  reducers: {
    getRoomsAction(state, { payload }) {
      state.rooms = payload
    },
    getRoomInfoAction(state, { payload }) {
      state.detail = payload
    },
  },
  // listen axios : pending / fulfilled / rejected
  extraReducers: (builder) => {
    builder.addCase(fetchRoomDataAction.fulfilled, (state, { payload }) => {
      state.rooms = payload
    })
    builder.addCase(fetchRoomInfoAction.fulfilled, (state, { payload }) => {
      state.detail = payload
    })
  },
})

export const { getRoomsAction } = roomSlice.actions
export default roomSlice.reducer
