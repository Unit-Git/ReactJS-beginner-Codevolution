import React from 'react';
import './App.css';
import RefsDemo from './components/RefsDemo';
import RefFocusInput from './components/RefFocusInput';
import FRinputParent from './components/FRinputParent';

function App() {
	return (
		<div style={{ padding: '2.5rem' }}>
			{/* <RefsDemo /> */}
			<RefFocusInput />
			<FRinputParent />
		</div>
	);
}

export default App;
