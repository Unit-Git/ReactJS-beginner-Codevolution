import React, { Component, Fragment } from 'react';

class EventBind extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: 'Hello',
			textButton: 'Click here!',
			statusGoogBye: false,
		};
	}

	handleSayGoodBye = (e) => {
		if (this.state.statusGoogBye === false) {
			this.setState({
				message: 'GoodBye!',
				statusGoogBye: true,
			});
		} else {
			this.setState({
				message: 'Hello!',
				statusGoogBye: false,
			});
		}
	};

	render() {
		const { message, textButton } = this.state;
		return (
			<Fragment>
				<h3 style={{ marginTop: '2rem' }}>{message}</h3>
				<button onClick={this.handleSayGoodBye}>{textButton}</button>
			</Fragment>
		);
	}
}

export default EventBind;
