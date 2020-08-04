import React, { Fragment } from 'react';

import { createPortal } from 'react-dom';

function PortalDemo() {
	return createPortal(
		<Fragment>
			<h1>Portal Demo</h1>
		</Fragment>,
		document.getElementById('portal-root')
	);
}

export default PortalDemo;
