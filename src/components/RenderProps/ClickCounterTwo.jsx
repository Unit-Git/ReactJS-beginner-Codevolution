import React, { Component, Fragment } from 'react';

class ClickCounterTwo extends Component {
	render() {
		const { count } = this.props;

		return (
			<Fragment>
				<span>This is the click counter two</span>
				<br />
				<button onClick={this.props.incrementCount}>Click {count} Times</button>
			</Fragment>
		);
	}
}

export default ClickCounterTwo;
