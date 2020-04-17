import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Controls from './components/Controls/Controls';
import ToDos from './components/ToDos/ToDos';

function App() {
	return (
		<div className='App'>
			<Header />

			<Controls />
			<ToDos />
		</div>
	);
}

export default App;
