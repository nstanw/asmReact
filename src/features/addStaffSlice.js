import { createSlice } from "@reduxjs/toolkit";
import { STAFFS } from "../shared/staff";

export const addStaffSlice = createSlice({
  name: "addStaff",
  initialState: {
    listStaff: STAFFS,
    newStaff: [],
  },
  reducers: {
    addStaff: (state, action) => {
      state.listStaff = state.listStaff.concat(action.payload);
    },
  },
});

export const { addStaff } = addStaffSlice.actions;
export default addStaffSlice.reducer;
