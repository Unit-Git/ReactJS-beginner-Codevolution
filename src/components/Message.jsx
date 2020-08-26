import React, { Component } from 'react';

class Message extends Component {
	constructor() {
		super();
		this.state = {
			message: 'Welcome Visitors',
			status: false,
		};
	}

	changeMessage(e) {
		const status = this.state.status;

		if (status === false) {
			this.setState({
				message: 'Thank you for subcribe',
				status: true,
			});
			e.target.innerHTML = 'Unsubscribe';
		} else {
			this.setState({
				message: 'Unsubcribe',
				status: false,
			});
			e.target.innerHTML = 'Subscribe';
		}
	}

	render() {
		return (
			<div>
				<h1>{this.state.message}</h1>
				<button onClick={(e) => this.changeMessage(e)}>Subscribe</button>
			</div>
		);
	}
}

export default Message;
