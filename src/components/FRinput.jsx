import React, { forwardRef } from 'react';

// function FRinput() {
// 	return (
// 		<div>
// 			<input type='text'  />
// 		</div>
// 	);
// }

const FRinput = forwardRef((props, ref) => {
	return (
		<div>
			<input type='text' ref={ref} />
		</div>
	);
});

export default FRinput;
