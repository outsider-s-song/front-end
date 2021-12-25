import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	number: 0,
};

const scoreSlice = createSlice({
	name: 'test',
	initialState: initialState,
	reducers: {
		add: (state, action) => {
			state.number += 1;
		},
		minus: (state, action) => {
			state.number -= 1;
		},
	},
	extraReducers: {},
});

//* reducer export
export const { add, minus } = scoreSlice.actions;

//* slice export
export default scoreSlice;
