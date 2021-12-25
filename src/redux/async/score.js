import { createAsyncThunk } from '@reduxjs/toolkit';
import { apis } from '../../axios';

export const getScoresListMD = createAsyncThunk('score/get', async (data, thunkAPI) => {
	try {
		const response = await apis.getScoresListAPI();
		if (response) {
			return response;
		}
	} catch (err) {
		return thunkAPI.rejectWithValue(err);
	}
});
