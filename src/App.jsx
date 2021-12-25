import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Collection from './pages/Collection';
import Socre from './pages/Socre';

const App = () => {
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
