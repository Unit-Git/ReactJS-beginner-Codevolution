import React from 'react';
import './App.css';
// import { Greet } from './components/Greet.jsx';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
	return (
		<div className='App'>
			<p></p>
			<Counter />

			<Message />
		</div>
	);
}

export default App;
