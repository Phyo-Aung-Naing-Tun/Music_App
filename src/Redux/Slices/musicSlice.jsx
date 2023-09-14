import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  musicInfos: [],
  musicUrl: "",
};
export const musicSlice = createSlice({
  name: "musicSlice",
  initialState,
  reducers: {
    getMusicInfos: (state, { payload }) => {
      state.musicInfos.push(payload);
    },
    getMusicUrl: (state, { payload }) => {
      state.musicUrl = payload;
    },
  },
});

export const { getMusicInfos, getMusicUrl } = musicSlice.actions;
export default musicSlice.reducer;
