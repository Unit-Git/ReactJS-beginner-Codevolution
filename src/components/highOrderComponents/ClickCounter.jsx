import React, { Component, Fragment } from 'react';
import withCounter from './withCounter';

class ClickCounter extends Component {
	// constructor(props) {
	// 	super(props);

	// 	this.state = {
	// 		count: 0,
	// 	};
	// }

	// incrementCount = () => {
	// 	this.setState(prevState => {
	// 		return {
	// 			count: prevState.count + 1,
	// 		};
	// 	});
	// };

	render() {
		const { count, incrementCount, name } = this.props;
		return (
			<Fragment>
				<button onClick={incrementCount}>
					{' '}
					{name} Clicked {count} Times
				</button>
			</Fragment>
		);
	}
}

export default withCounter(ClickCounter);
