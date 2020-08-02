import React from 'react';
import './App.css';
import LifecycleA from './components/LifecycleA';
import FragDemo from './components/FragDemo';
import Table from './components/Table';
// import Forms from './components/Forms';
// import EventBind from './components/EventBind';
// import ParentConmponent from './components/ParentConmponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import { StyleWithFileCss, InlineCss } from './components/StyleSheet';
// import Message from './components/Message';
// import Counter from './components/Counter';
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';

// const devider = {
// 	marginBottom: '2rem',
// 	marginTop: '3rem',
// 	width: '100%',
// 	borderBottom: '1px solid #333',
// };

function App() {
	return (
		<div style={{ padding: '2.5rem' }}>
			{/* <p></p>
			<Counter />
			<Message /> */}
			{/* <div style={devider}></div> */}
			{/* <FunctionClick />
			<ClassClick /> */}
			{/* <EventBind />
			<div style={devider}></div>
			<p>Methods as props</p>
			<p></p>
			<ParentConmponent />
			<div style={devider}></div>
			<p>Conditional rendering</p>
			<p></p>

			<UserGreeting />
			<div style={devider}></div>
			<p>List Rendering with Map</p>
			<p></p> */}
			{/* <NameList /> */}
			{/* <div style={devider}></div>
			<p>
				<b>Styling and css basic</b>
			</p>
			<span>with file css</span>
			<StyleWithFileCss primary={true} />
			<span>with file css</span>
			<InlineCss /> */}

			{/* <Forms /> */}
			<LifecycleA />
			<FragDemo />
			<Table />
		</div>
	);
}

export default App;
