//  NPM
import axios from "axios"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

//  Action
export const getStates = createAsyncThunk("states/getData", async (arg, {rejectWithValue}) => {
    try {
        return await axios.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then(res => { 
            return res.data
        })

    } catch (error) {
        rejectWithValue(error.response.data)
    }
})

//  Reducer
export const statesSlice = createSlice({
    name: "states",
    initialState: {
        items: [],
        isSuccess: false,
        message: "",
        loading: false,
    },
    reducers: {},
    extraReducers: {
        [getStates.pending]:(state, { payload }) => {
            state.loading = true
        },
        [getStates.fulfilled]:(state, { payload }) => {
            state.loading = false
            state.data = payload
            state.isSuccess = true
        },
        [getStates.rejected]:(state, { payload }) => {
            state.message = payload
            state.loading = false
            state.isSuccess = false
        },
    }
})

