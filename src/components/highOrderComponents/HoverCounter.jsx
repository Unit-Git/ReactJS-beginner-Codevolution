import React, { Component, Fragment } from 'react';
import withCounter from './withCounter';

class HoverCounter extends Component {
	setIncrement = e => this.props.incrementCount();

	render() {
		const { count } = this.props;
		return (
			<Fragment>
				<h2 onMouseOver={this.setIncrement}>Hovered {count} times </h2>
			</Fragment>
		);
	}
}

export default withCounter(HoverCounter);
