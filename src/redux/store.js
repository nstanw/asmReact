import { configureStore } from "@reduxjs/toolkit";
import addStaffReducer from "./addStaffSlice";

const rootReducer = {
  addStaff: addStaffReducer,
};
export const store = configureStore({
  reducer: rootReducer,
});
