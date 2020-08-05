import React from 'react';
import './App.css';
import ClickCounter from './components/highOrderComponents/ClickCounter';
import HoverCounter from './components/highOrderComponents/HoverCounter';

function App() {
	return (
		<div style={{ padding: '2.5rem' }}>
			<ClickCounter name='abhay' />
			<HoverCounter />
		</div>
	);
}

export default App;
