import {configureStore} from "@reduxjs/toolkit";
import employeesSlice from "./employeesSlice.jsx";

export const store = configureStore({
    reducer: {
        employees: employeesSlice,
    }
})