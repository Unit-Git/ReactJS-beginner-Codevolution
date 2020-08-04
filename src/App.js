import React from 'react';
import './App.css';
import PortalDemo from './components/PortalDemo';
import Hero from './components/Hero';
import ErrorBoundry from './components/ErrorBoundry';

function App() {
	return (
		<div style={{ padding: '2.5rem' }}>
			<ErrorBoundry>
				{' '}
				<Hero heroName='Batman' />
				<Hero heroName='Superman' />
				<Hero heroName='joker' />
			</ErrorBoundry>
		</div>
	);
}

export default App;
