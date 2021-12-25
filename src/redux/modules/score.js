import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isModal: false,
	noteInfo: {},
};

const scoreSlice = createSlice({
	name: 'score',
	initialState: initialState,
	reducers: {
		UpdateModal: (state, { payload }) => {
			state.isModal = payload;
		},
		GetNoteInfo: (state, { payload }) => {
			state.noteInfo = payload;
		},
	},
	extraReducers: {},
});

//* reducer export
export const { UpdateModal, GetNoteInfo } = scoreSlice.actions;

//* slice export
export default scoreSlice;
