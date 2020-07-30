import React, { Component, Fragment } from 'react';
import ChildComponent from './ChildComponent';

class ParentConmponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			parentName: 'parent',
		};
	}

	greetParent = (childName) => {
		alert(`Hello ${this.state.parentName} from ${childName}`);
	};
	render() {
		return (
			<Fragment>
				<ChildComponent greetHandler={this.greetParent} />
			</Fragment>
		);
	}
}

export default ParentConmponent;
