import React from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Collection from './pages/Collection';
import Socre from './pages/Socre';
import { getScoresListMD } from './redux/async/score';

const App = () => {
	const dispatch = useDispatch();
	dispatch(getScoresListMD());
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/score/:id" element={<Socre />} />
					<Route path="/" element={<Collection />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
