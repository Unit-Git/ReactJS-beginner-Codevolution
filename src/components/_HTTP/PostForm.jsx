import React, { Component } from 'react';

class PostForm extends Component {
	constructor(props) {
		super(props);

		this.state = {
			userId: '',
			title: '',
			body: '',
		};
	}

	handleInputsChange = event => {
		const target = event.target;
		const value = target.value;
		const name = target.name;

		this.setState({
			[name]: value,
		});
	};

	submitHandler = e => {
		e.preventDefault();
		console.log(this.state);
	};

	render() {
		const { userId, title, body } = this.state;
		return (
			<>
				<form
					action=''
					style={{ width: '300px' }}
					onSubmit={this.submitHandler}>
					<div className='form--group'>
						<label htmlFor=''>UserId</label>
						<input
							className='form--control'
							type='text'
							name='userId'
							value={userId}
							onChange={this.handleInputsChange}
						/>
					</div>
					<br />
					<div className='form--group'>
						<label htmlFor=''>Title</label>
						<input
							className='form--control'
							type='text'
							name='title'
							value={title}
							onChange={this.handleInputsChange}
						/>
					</div>
					<br />
					<div className='form--group'>
						<label htmlFor=''>Body</label>
						<input
							className='form--control'
							type='text'
							name='body'
							value={body}
							onChange={this.handleInputsChange}
						/>
					</div>
					<br />
					<div className='form--group'>
						<button className='button'>Save</button>
					</div>
				</form>
			</>
		);
	}
}

export default PostForm;
