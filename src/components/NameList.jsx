import React, { Fragment } from 'react';
import Unit from './Unit';

function NameList() {
	const names = ['unit', 'unit2', 'unit3'];

	const units = [
		{
			id: 1,
			name: 'unit1',
			age: 20,
		},
		{
			id: 2,
			name: 'unit2',
			age: 22,
		},
		{
			id: 3,
			name: 'unit3',
			age: 24,
		},
		{
			id: 4,
			name: 'unit4',
			age: 23,
		},
	];

	const nameslist = names.map((name, index) => (
		<h4 key={index}>
			{index + 1} {name}
		</h4>
	));
	const unitList = units.map((unit) => <Unit key={unit.id} unit={unit} />);

	return (
		<Fragment>
			<div>{nameslist}</div>
			<ul>{unitList}</ul>
		</Fragment>
	);
}

export default NameList;
