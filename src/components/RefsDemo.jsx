import React, { Component, Fragment, createRef } from 'react';

export class RefsDemo extends Component {
	constructor(props) {
		super(props);

		this.usernameRef = createRef();

		this.state = {};

		this.cbref = null;
		this.setCbRef = element => (this.cbref = element);
	}

	componentDidMount() {
		if (this.cbref) {
			this.cbref.focus();
		}
		// this.usernameRef.current.focus();
		//console.log(this.usernameRef);
	}

	clickRefHandler = () => {
		alert(this.usernameRef.current.value);
	};

	render() {
		return (
			<Fragment>
				<br />
				<label htmlFor=''>Username </label>
				<br />
				<input type='text' ref={this.usernameRef} />
				<input type='text' ref={this.setCbRef} />
				<br />
				<br />
				<button onClick={this.clickRefHandler}>Click here bastard!</button>
			</Fragment>
		);
	}
}

export default RefsDemo;
