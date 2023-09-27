import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  musicInfos: [],
  filterMusic: [],
  singleMusic: {},
  // For controls btns and progress bar and banning the filereader
  toggle: true,
  // For Searching
  toggleForSearch: true,
};
export const musicSlice = createSlice({
  name: "musicSlice",
  initialState,
  reducers: {
    getMusicInfos: (state, { payload }) => {
      state.musicInfos.push(payload);
    },
    getSingleMusic: (state, { payload }) => {
      state.singleMusic = payload;
    },
    setMusicToggle: (state) => {
      state.toggle = !state.toggle;
    },
    getFilterMusic: (state, { payload }) => {
      state.filterMusic = payload;
    },
    setToggleForSearch: (state, { payload }) => {
      state.toggleForSearch = payload;
    },
  },
});

export const {
  getMusicInfos,
  getSingleMusic,
  setMusicToggle,
  getFilterMusic,
  setToggleForSearch,
} = musicSlice.actions;
export default musicSlice.reducer;
