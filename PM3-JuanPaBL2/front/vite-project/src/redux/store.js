import { configureStore } from "@reduxjs/toolkit";
import { reducerSlice } from "./reducer";

const store = configureStore({
    reducer: reducerSlice.reducer 
})

export default store;