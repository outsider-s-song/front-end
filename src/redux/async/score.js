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

export const postNoteMD = createAsyncThunk('score/post', async (data, thunkAPI) => {
	try {
		const response = await apis.addNoteAPI(data);
		if (response) {
			return response;
		}
	} catch (err) {
		return thunkAPI.rejectWithValue(err);
	}
});
export const getNoteListMD = createAsyncThunk('score/notes', async (data, thunkAPI) => {
	try {
		const response = await apis.getNoteListAPI(data);
		if (response) {
			return response;
		}
	} catch (err) {
		return thunkAPI.rejectWithValue(err);
	}
});
