import React from 'react';
import { connect } from 'react-redux';
import { fetchPeople } from '../actions/index';

class People extends React.Component{

componentDidMount(){
	this.props.fetchPeople();
	// console.log(this.props.items);
	// let peopleData = {};
	// stuff.payload.then(data => data.json()).then((data) => {peopleData = data});
}

render() {
	console.log("thisisit:",this.props);
	return(
		<div className="people">
			<button className="aurebesh-btn">Aurebesh</button>
			<ul>
				Hey there wassaup
				
			</ul>
		</div>
	);
	}
}

function mapStateToProps(state) {
	return { items: state.items.all };
}

export default connect( mapStateToProps ,{fetchPeople})(People);
