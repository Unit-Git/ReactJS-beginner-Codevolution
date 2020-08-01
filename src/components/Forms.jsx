import React, { Component, Fragment } from 'react';

class Forms extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: '',
			comments: '',
			topic: 'none',
		};
	}

	handleUsernameChange = event => {
		this.setState({
			username: event.target.value,
		});
	};

	// handleCommentsChange = event => {
	// 	this.setState({
	// 		comments: event.target.value,
	// 	});
	// };

	// handleTopicChange = event => {
	// 	this.setState({
	// 		topic: event.target.value,
	// 	});
	// };

	handleSubmit = event => {
		this.setState({
			username: '',
			comments: '',
			topic: 'none',
		});
		event.preventDefault();
	};

	handleInputsChange = event => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	};

	render() {
		const { username, comments, topic } = this.state;

		return (
			<Fragment>
				<h3>Username : {username}</h3>

				<h3>
					Topic : <span style={{ textTransform: 'uppercase' }}> {topic}</span>
				</h3>
				<h3>Comments : {comments}</h3>
				<form action='' onSubmit={this.handleSubmit}>
					<div>
						<label htmlFor=''>Username</label>
						<br />
						<input
							name='username'
							type='text'
							value={username}
							onChange={this.handleInputsChange}
						/>
					</div>
					<br />
					<div>
						<label htmlFor=''>Topic</label>
						<br />
						<select
							name='topic'
							value={topic}
							onChange={this.handleInputsChange}>
							<option value='none'> -- Choose the Topic -- </option>
							<option value='react'>REACT</option>
							<option value='vue'>VUE</option>
							<option value='angular'>ANGULAR</option>
						</select>
					</div>
					<br />
					<div>
						<label htmlFor='comments'>Comments</label>
						<br />
						<textarea
							name='comments'
							id=''
							cols='22'
							rows='6'
							value={comments}
							onChange={this.handleInputsChange}></textarea>
					</div>
					<div>
						<button type='submit'>Submit</button>
					</div>
				</form>
			</Fragment>
		);
	}
}

export default Forms;
