import React, { PureComponent } from 'react';

class PureComp extends PureComponent {
	render() {
		console.log('Pure Comp');
		return (
			<div>
				<h3>
					Pure Component : <span>{this.props.name}</span>
				</h3>
			</div>
		);
	}
}

export default PureComp;
