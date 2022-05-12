import { configureStore } from "@reduxjs/toolkit";
import addStaffReducer from "./addStaffSlice";

export const store = configureStore({
  reducer: {
    addStaff: addStaffReducer,
  },
});
