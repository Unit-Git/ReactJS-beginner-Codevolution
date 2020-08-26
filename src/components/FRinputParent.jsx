import React, { Component, Fragment, createRef } from 'react';
import FRinput from './FRinput';

class FRinputParent extends Component {
	constructor(props) {
		super(props);

		this.inputRef = createRef();
	}

	clickHandlerRef = () => {
		this.inputRef.current.focus();
	};

	render() {
		return (
			<Fragment>
				<br />
				<br />
				<hr />
				<h3> Forwading Refs</h3>

				<FRinput ref={this.inputRef} />
				<button onClick={this.clickHandlerRef}>Focus input</button>
			</Fragment>
		);
	}
}

export default FRinputParent;
