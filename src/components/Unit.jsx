import React, { Fragment } from 'react';

function Unit(props) {
	const { unit } = props;

	return (
		<Fragment>
			<li>
				<span>{unit.name}</span>
				<span style={{ marginLeft: '10px' }}>({unit.age})</span>
			</li>
		</Fragment>
	);
}

export default Unit;
