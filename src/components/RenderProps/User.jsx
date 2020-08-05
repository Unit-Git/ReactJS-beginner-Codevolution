import React, { Component, Fragment } from 'react';

class User extends Component {
	render() {
		return (
			<Fragment>
				<h2>{this.props.render(true)}</h2>
			</Fragment>
		);
	}
}

export default User;
