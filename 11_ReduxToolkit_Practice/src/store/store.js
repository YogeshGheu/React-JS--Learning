import { configureStore, createReducer } from "@reduxjs/toolkit";
import sliceReducer from "./cartSlice.js";

const store = configureStore({
	reducer: {
		cartReducer: sliceReducer,
	},
});

export default store;
