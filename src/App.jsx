import React from 'react';
import Collection from './pages/Collection';
import Socre from './pages/Socre';

// * for redux-toolkit example
import { useDispatch, useSelector } from 'react-redux';
import { add, minus } from './redux/modules/score';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

const App = () => {
	const dispatch = useDispatch();
	const number = useSelector((state) => state.count.number);
	return (
		<>
			<h1>{number}</h1>
			<button onClick={() => dispatch(add())}>plus</button>
			<button onClick={() => dispatch(minus())}>minus</button>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Socre />} />
					<Route path="/collection" element={<Collection />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default App;
