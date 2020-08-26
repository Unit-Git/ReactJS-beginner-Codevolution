import React from 'react';

const FunctionClick = () => {
	const clickHandler = () => {
		console.log('okkk');
	};

	return (
		<div>
			<button onClick={clickHandler}>Click</button>
		</div>
	);
};

export default FunctionClick;
