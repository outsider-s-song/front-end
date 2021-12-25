// * import basic libary
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { configureStore } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

// * import slices
import scoreSlice from './modules/score';
import collectionSlice from './modules/collection';

export const history = createBrowserHistory();

// * reducers
const reducer = combineReducers({
	router: connectRouter(history),
	score: scoreSlice.reducer,
	collection: collectionSlice.reducer,
});

const middlewares = [thunkMiddleware];
const env = process.env.NODE_ENV;

if (env === 'development') {
	const { logger } = require('redux-logger');
	middlewares.push(logger);
}

const store = configureStore({
	reducer,
	middleware: [...middlewares],
	devTools: env !== 'production',
});

export default store;
