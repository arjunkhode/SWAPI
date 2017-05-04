import React from 'react';
import { connect } from 'react-redux';
import { fetchPeople } from '../actions/index';

class People extends React.Component{

componentWillMount(){
	fetchPeople();
	console.log(this.props.items);
	// let peopleData = {};
	// stuff.payload.then(data => data.json()).then((data) => {peopleData = data});
}

render() {
	return(
		<div className="people">
			<ul>
				Hey there wassaup
				{this.props.items}
			</ul>
		</div>
	);
	}
}

function mapStateToProps(state) {
	return { items: state.items.all };
}

export default connect(mapStateToProps, { fetchPeople })(People);
