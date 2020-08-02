import React, { Component, Fragment } from 'react';

class LifecycleA extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'tess',
		};

		console.log('LifeCycle construc');
	}

	static getDerivedStateFromProps(props, state) {
		console.log('lifeCycle getDerived');
		return null;
	}

	componentDidMount() {
		console.log('LifeCycle Didmount');
	}

	render() {
		console.log('LifeCycle Render');
		return (
			<Fragment>
				<h1>Mounting</h1>
			</Fragment>
		);
	}
}

export default LifecycleA;
