import React, { Component, Fragment } from 'react';
// import RegComp from './RegComp';
// import PureComp from './PureComp';
import MemoComp from './MemoComp';
// import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'abhay',
		};
	}

	componentDidMount() {
		let no = 1;
		setInterval(() => {
			this.setState({
				no: no + 1,
				name: `Abhay`,
			});
		}, 2000);
	}

	// greetParent = childName => {
	// 	alert(`Hello ${this.state.parentName} from ${childName}`);
	// };

	render() {
		console.log('====== Parent Comp render ======');
		return (
			<Fragment>
				{/* <ChildComponent greetHandler={this.greetParent} /> */}
				<MemoComp name={this.state.name} />
				{/* <RegComp name={this.state.name} />
				<PureComp name={this.state.name} /> */}
			</Fragment>
		);
	}
}

export default ParentComponent;
