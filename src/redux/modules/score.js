import { createSlice } from '@reduxjs/toolkit';
import { getScoresListMD, postNoteMD } from '../async/score';

const initialState = {
	isModal: false,
	scores: {},
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
		UpdateNoteInfo: (state, { payload }) => {
			state.noteInfo = payload;
		},
	},
	extraReducers: {
		[getScoresListMD.fulfilled]: (state, { payload }) => {
			console.log(payload);
		},
		[postNoteMD.fulfilled]: (state, { payload }) => {
			// console.log('scores:::', state.scores);
		},
	},
});

//* reducer export
export const { UpdateModal, GetNoteInfo, UpdateNoteInfo } = scoreSlice.actions;

//* slice export
export default scoreSlice;
