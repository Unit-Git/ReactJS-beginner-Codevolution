import React from 'react';
import './App.css';
import LifecycleA from './components/LifecycleA';
import FragDemo from './components/FragDemo';
import Table from './components/Table';
import ParentComponent from './components/ParentComponent';

function App() {
	return (
		<div style={{ padding: '2.5rem' }}>
			<LifecycleA />
			<FragDemo />
			<Table />
			<ParentComponent />
		</div>
	);
}

export default App;
