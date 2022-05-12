import { configureStore } from "@reduxjs/toolkit";
import reducer from "./addStaffSlice";

const rootReducer = {
    staff : reducer,
}

export const store = configureStore({
  reducer: rootReducer,
   
  
});
