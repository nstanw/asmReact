import { createSlice } from "@reduxjs/toolkit"
import {STAFFS} from '../shared/staff'

const localStaffs = JSON.parse(localStorage.getItem("arrCurrent"));
const staffs = localStaffs === null ? STAFFS : localStaffs;

const initialState = staffs;

export const addStaffSlice = createSlice({
    name: 'staff',
    initialState, 
    reducers: {
        addStaff: (state, action) => {
            state.concat(action.payload)
        }
    }
})

const {actions , reducer} = addStaffSlice;
export const { addStaff } = actions;
export default reducer;