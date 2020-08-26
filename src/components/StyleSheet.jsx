import React, { Fragment } from 'react';
import '../css/myStyles.css';
import '../css/appStyles.css';
import style from '../css/appStyles.module.css';
import FB_report from '../img/FB_report.jpg';

function StyleWithFileCss(props) {
	let className = props.primary ? 'primary' : '';

	return (
		<div>
			<h1 className={className}>StyleSheet</h1>
		</div>
	);
}

const InlineCss = props => {
	const headingStyle = {
		fontSize: '30px',
		color: '#333',
	};

	return (
		<Fragment>
			<h1 style={headingStyle}>InlineCss</h1>
			{/* use css modules */}
			<br />
			<h1 className='error'>Error</h1>
			<h1 className={style.success}>Success</h1>

			<img style={{ width: '414px' }} src={FB_report} alt='' />
		</Fragment>
	);
};

export { InlineCss, StyleWithFileCss };
