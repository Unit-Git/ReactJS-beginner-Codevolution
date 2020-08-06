import React from 'react';
import './App.css';
import ComponentC from './components/Context/ComponentC';
import { UserProvider } from './components/Context/userContext';
// import ClickCounterTwo from './components/RenderProps/ClickCounterTwo';
// import HoverCounterTwo from './components/RenderProps/HoverCounterTwo';
// import User from './components/RenderProps/User';
// import checkLogin from './components/RenderProps/checkLoggin';
// import CounterRenderProps from './components/RenderProps/Counter.RenderProps';

function App() {
	return (
		<div style={{ padding: '2.5rem' }}>
			{/* <UserProvider value='Akbar'> */}
			<ComponentC />
			{/* </UserProvider> */}
		</div>
	);
}

export default App;
