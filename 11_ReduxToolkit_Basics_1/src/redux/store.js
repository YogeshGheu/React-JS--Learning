import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counterSlice"; // it was default exported so we can impoert by any name

const store = configureStore({
	reducer: {
		counter: counterReducer, // Matches state.counter
	},
});

export default store;
