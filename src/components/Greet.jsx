import React from 'react';

export const Greet = ({ name, heroName, children }) => {
	return (
		<div>
			<h1>
				Hello {name} <i>a.k.a({heroName})</i>
			</h1>

			{children}
		</div>
	);
};
