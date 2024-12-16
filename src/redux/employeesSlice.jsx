import {createSlice} from "@reduxjs/toolkit";

const employeesSlice = createSlice({
    name: "employees",
    initialState: {
        data: [],
    },
    reducers: {
        addData: (state, action) => {
            console.log(state)
            console.log(action)
            state.data.push(action.payload);
        },
    }
})

export const {addData} = employeesSlice.actions;
export default employeesSlice.reducer;