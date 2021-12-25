import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Collection from './pages/Collection';
import Socre from './pages/Socre';

const App = () => {
	return (
		<>
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
