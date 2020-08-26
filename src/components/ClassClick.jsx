import React, { Component } from 'react';

class ClassClick extends Component {
	clickHandler() {
		console.log('class button');
	}

	render() {
		return (
			<div style={{ marginTop: '1rem' }}>
				<button onClick={this.clickHandler}>Button Class Handling</button>
			</div>
		);
	}
}

export default ClassClick;
