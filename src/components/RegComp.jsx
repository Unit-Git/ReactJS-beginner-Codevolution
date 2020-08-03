import React, { Component, Fragment } from 'react';

class RegComp extends Component {
	render() {
		console.log('Regular Comp');
		return (
			<Fragment>
				<h3>
					Regular Comp : <span>{this.props.name}</span>
				</h3>
			</Fragment>
		);
	}
}

export default RegComp;
