import React, { Component, Fragment, createRef } from 'react';

class RefInputDemo extends Component {
	constructor(props) {
		super(props);

		this.inputRef = createRef();
		this.state = {};
	}

	focusInput() {
		this.inputRef.current.focus();
	}

	render() {
		return (
			<Fragment>
				<input type='text' ref={this.inputRef} />
			</Fragment>
		);
	}
}

export default RefInputDemo;
