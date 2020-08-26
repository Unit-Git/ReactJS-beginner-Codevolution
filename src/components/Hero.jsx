import React, { Fragment } from 'react';

function Hero({ heroName }) {
	if (heroName === 'joker') {
		throw new Error('Not a hero');
	}
	return (
		<Fragment>
			<h1>{heroName}</h1>
		</Fragment>
	);
}

export default Hero;
