import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchApi = createAsyncThunk("fetchApi", async () => {
    let response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
});

export const apiSlice = createSlice({
    name: "apiSlice",
    initialState: { record1: [], loading: true },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchApi.fulfilled, (state, action) => {
            console.log("fulfilled");

            state.loading = false;
            state.record1 = action.payload;
        });

        builder.addCase(fetchApi.pending, (state) => {
            console.log("pending");
            state.loading = true;
        });
    }
});

export default apiSlice.reducer;
