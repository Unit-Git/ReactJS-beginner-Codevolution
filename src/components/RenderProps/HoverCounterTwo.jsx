import React, { Component, Fragment } from 'react';

const styleTextHover = {
	fontSize: '20px',
	fontWeight: 'bold',
};

class HoverCounterTwo extends Component {
	render() {
		return (
			<Fragment>
				<br />
				<br />
				<span>This is the Hover Counter Two</span>
				<br />
				<span
					onMouseOver={this.props.incrementCount}
					style={{ ...styleTextHover }}>
					Hover {this.props.count} Times
				</span>
			</Fragment>
		);
	}
}

export default HoverCounterTwo;
