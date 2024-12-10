import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "../features/AppSlice";

export const store = configureStore({
    reducer: {
        ApiKey: apiSlice,
    },
});
