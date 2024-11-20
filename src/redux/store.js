import { configureStore } from '@reduxjs/toolkit';
import dataSlice from "./slice/data.js";

const store = configureStore({
    reducer: {
        pizzas:  dataSlice.reducer,
    },
});

export default store;
