import React, { memo } from 'react';

function MemoComp(props) {
	console.log('render Memo Comp');
	return <div>{props.name}</div>;
}

export default memo(MemoComp);
