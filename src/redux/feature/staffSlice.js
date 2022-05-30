import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as staffServices from "../../apiServices/staffServices";

//crate thunk get staff
export const axiosGetListStaff = createAsyncThunk(
  "AXIOS/GET_LISTSTAFF",
  async () => {
    const response = await staffServices.getInfor("staffs");
    return response;
  }
);
export const axiosPostStaff = createAsyncThunk(
  "AXIOS/POST_AXIOS",
  async ( data) => {
    const response = await staffServices.PostData("staffs",data);
    return response;
  }
);



const staffSlice = createSlice({
  name: "AXIOS",
  initialState: {
    listStaff: {
      isError: false,
      listStaff: [],
      errorMess: null,
    },
    addStaff: {
      isError: false,
      addStaff: [],
      errorMess: null,
    },
  },
  reducers: {},
  extraReducers: {
    [axiosGetListStaff.fulfilled]: (state, action) => {
      state.listStaff = {
        isError: false,
        listStaff: action.payload,
        errorMess: null,
      };
    },
    [axiosGetListStaff.rejected]: (state, action) => {
      state.listStaff = {
        isError: true,
        errorMess: action.error.message,
      };
    },
    //add staff
    [axiosPostStaff.fulfilled]: (state, action) => {
      state.addStaff = {
        isError: false,
        addStaff: action.payload,
        errorMess: null,
      };
      state.listStaff.listStaff.push(action.payload)
    },
    [axiosPostStaff.rejected]: (state, action) => {
      state.addStaff = {
        isError: true,
        errorMess: action.error.message,
      };
    },
  },
});

export const { reducer: axiosStaff } = staffSlice;
export default axiosStaff;
