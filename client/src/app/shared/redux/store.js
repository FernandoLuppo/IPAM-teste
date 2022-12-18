//  NPM
import { configureStore } from "@reduxjs/toolkit"
import { statesSlice } from "./states/states"

//  Store
export const store = configureStore({
    reducer: {
        states: statesSlice.reducer
    }
})