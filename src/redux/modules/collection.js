import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	scoreList: [
		{
			scoreId: 1,
			noteList: [
				{
					note: ['C4', 8n],
					index: 0,
					color: 'red',
				},
			],
		},
	],
};

const collectionSlice = createSlice({
	name: 'collectionList',
	initialState: initialState,
	reducers: {
		addScoreList: (state, { payload }) => {
			state.scoreList = payload;
		},
	},
	extraReducers: {},
});

//* reducer export
export const { addScoreList } = collectionSlice.actions;

//* slice export
export default collectionSlice;
