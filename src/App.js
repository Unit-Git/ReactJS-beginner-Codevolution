import React from 'react';
import './App.css';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';

const devider = {
	marginBottom: '2rem',
	marginTop: '3rem',
	width: '100%',
	borderBottom: '1px solid #333',
};

function App() {
	return (
		<div className='App'>
			<p></p>
			<Counter />
			<Message />
			<div style={devider}></div>
			<FunctionClick />
			<ClassClick />
		</div>
	);
}

export default App;
