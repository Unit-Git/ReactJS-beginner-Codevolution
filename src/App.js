import React from 'react';
import './App.css';
import PostList from './components/_HTTP/PostList';
import './components/_HTTP/post.css';
import PostForm from './components/_HTTP/PostForm';

function App() {
	return (
		<div className='main-content'>
			<PostList />
			<PostForm />
		</div>
	);
}

export default App;
