import React, { Component, Fragment } from 'react';

class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isloggedIn: false,
		};
	}

	render() {
		const { isloggedIn } = this.state;

		// let message;
		// if (!isloggedIn) {
		// 	message = <h3>Welcome Guest!</h3>;
		// } else {
		// 	message = <h3>Welcome Abhay!</h3>;
		// }

		// if (isloggedIn) {
		// 	return <h3>Welcome Abhay!</h3>;
		// } else {
		// 	return <h3>Welcome Guest!</h3>;
		// }

		// return <Fragment>{message}</Fragment>;
		return isloggedIn ? (
			<Fragment>
				<h3>Welcome Abhay!</h3>
			</Fragment>
		) : (
			<Fragment>
				<h3>Welcome Guest!</h3>
			</Fragment>
		);
	}
}

export default UserGreeting;
