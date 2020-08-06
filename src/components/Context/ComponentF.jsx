import React, { Component } from 'react';
import { UserConsumer } from './userContext';

export class ComponentF extends Component {
	render() {
		return (
			<UserConsumer>
				{({ name }) => {
					return (
						<>
							<h3>Hello {name}</h3>
						</>
					);
				}}
			</UserConsumer>
		);
	}
}

export default ComponentF;
