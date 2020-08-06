import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './userContext';

export class ComponentE extends Component {
	render() {
		const { status } = this.context;

		return (
			<>
				Component E context {status}
				<ComponentF />
			</>
		);
	}
}

ComponentE.contextType = UserContext;

export default ComponentE;
