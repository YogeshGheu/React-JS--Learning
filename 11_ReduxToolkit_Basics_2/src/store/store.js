import { configureStore } from "@reduxjs/toolkit";
import sliceReducer from "./storeSlice.js";

const store = configureStore({
	reducer: {
        countValReducer: sliceReducer,
    },
});

export default store;
