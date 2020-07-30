import React, { Component, Fragment } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);

		this.state = {
			count: 0,
		};
	}

	increment() {
		this.setState({
			count: this.state.count + 1,
		});
	}

	decrement() {
		if (this.state.count > 0) {
			this.setState({
				count: this.state.count - 1,
			});
		}
	}

	render() {
		return (
			<Fragment>
				<h1>Count - {this.state.count}</h1>
				<button onClick={(e) => this.increment(e)}>Increment</button>
				<button onClick={(e) => this.decrement(e)}>Decrement </button>
			</Fragment>
		);
	}
}

export default Counter;
