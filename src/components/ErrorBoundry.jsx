import React, { Component } from 'react';

export class ErrorBoundry extends Component {
	constructor(props) {
		super(props);

		this.state = {
			hasError: false,
		};
	}

	static getDerivedStateFromError(error) {
		return {
			hasError: true,
		};
	}

	componentDidCatch(err, info) {
		console.log(err);
		console.log(info);
	}

	render() {
		if (this.state.hasError) {
			return <h1 style={{ color: 'red' }}>Opps...Somenthing went wrong</h1>;
		}

		return this.props.children;
	}
}

export default ErrorBoundry;
