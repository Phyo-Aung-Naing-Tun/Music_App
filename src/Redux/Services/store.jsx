import { configureStore } from "@reduxjs/toolkit";
import musicSlice from "../Slices/musicSlice";

export const store = configureStore({
  reducer: {
    musicSlice: musicSlice,
  },
});
