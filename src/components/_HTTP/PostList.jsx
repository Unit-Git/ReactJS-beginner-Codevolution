import React, { Component, Fragment } from 'react';
import Axios from 'axios';

class PostList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			posts: [],
		};
	}

	componentDidMount() {
		Axios.get('https://jsonplaceholder.typicode.com/posts')
			.then(({ data }) => {
				this.setState({ posts: data });
			})
			.catch(err => console.log(err));
	}

	render() {
		const { posts } = this.state;
		return (
			<Fragment>
				<div style={{ flex: '0.5' }}>
					<h4>List of Post</h4>
					{posts.length
						? posts.map(post => {
								return (
									<div key={post.id}>
										{post.id}. {post.title}
									</div>
								);
						  })
						: null}
				</div>
			</Fragment>
		);
	}
}

export default PostList;
