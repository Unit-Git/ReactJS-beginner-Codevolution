import React, { Component, Fragment, createRef } from 'react';
import RefInputDemo from './RefInputDemo';

class RefFocusInput extends Component {
	constructor(props) {
		super(props);

		this.componentRef = createRef();
	}

	clickHandler = () => {
		this.componentRef.current.focusInput();
	};

	render() {
		return (
			<Fragment>
				<RefInputDemo ref={this.componentRef} />
				<button onClick={this.clickHandler}>Focus Input</button>
			</Fragment>
		);
	}
}

export default RefFocusInput;
