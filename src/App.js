import React from 'react';
import './App.css';
import ClickCounterTwo from './components/RenderProps/ClickCounterTwo';
import HoverCounterTwo from './components/RenderProps/HoverCounterTwo';
// import User from './components/RenderProps/User';
// import checkLogin from './components/RenderProps/checkLoggin';
import CounterRenderProps from './components/RenderProps/Counter.RenderProps';

function App() {
	return (
		<div style={{ padding: '2.5rem' }}>
			<CounterRenderProps
				render={(count, incrementCount) => (
					<ClickCounterTwo count={count} incrementCount={incrementCount} />
				)}
			/>
			<CounterRenderProps
				render={(count, incrementCount) => (
					<HoverCounterTwo count={count} incrementCount={incrementCount} />
				)}
			/>
			{/* <
			<HoverCounterTwo />
			<User render={checkLogin} /> */}
		</div>
	);
}

export default App;
