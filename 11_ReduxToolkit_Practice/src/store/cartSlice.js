import { createSlice } from "@reduxjs/toolkit";

// const initialState = [{ itemId: 0, ItemName: "", itemCount: 0 }];
const initialState = [];

const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		addItem: (state, actions) => {
			state.push(actions.payload);
		},
	},
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
