import { createSlice } from "@reduxjs/toolkit";

const storeSlice = createSlice({
	name: "numberCount",
	initialState: 0,
	reducers: {
		increment: (state) => state + 1,
		decrement: (state) => state - 1,
		reset: (state) => (state = 0),
	},
});

export const { increment, decrement, reset } = storeSlice.actions;

export default storeSlice.reducer;
