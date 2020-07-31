import React, { Fragment } from 'react';

function NameList() {
	const names = ['unit1', 'unit2', 'unit3'];
	const namelist = names.map((name) => <li>{name}</li>);
	return (
		<Fragment>
			<ul>{namelist}</ul>
		</Fragment>
	);
}

export default NameList;
