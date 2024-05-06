import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getRooms } from "apis/home";

export const fetchHomeDataAction = createAsyncThunk(
  "fetchData",
  async (params) => {
    const res = await getRooms();
    return res.result;
  }
);

const homeSlice = createSlice({
  name: "home", // action name
  initialState: {
    rooms: [],
  },
  reducers: {
    getRoomsAction(state, { payload }) {
      state.rooms = payload;
    },
  },
  // listen axios : pending / fulfilled / rejected
  extraReducers: (builder) => {
    builder.addCase(fetchHomeDataAction.fulfilled, (state, { payload }) => {
      state.rooms = payload;
    });
  },
});

export const { getRoomsAction } = homeSlice.actions;
export default homeSlice.reducer;
