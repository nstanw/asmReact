import { configureStore } from "@reduxjs/toolkit";
import addStaffReducer from "../features/addStaffSlice";

export const store = configureStore({
    reducer:{
        addStaff: addStaffReducer,
    }
})