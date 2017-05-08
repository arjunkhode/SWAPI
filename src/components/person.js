import React from 'react';
import { connect } from 'react-redux';
import { loadPage } from '../actions/index';

class Person extends React.Component{

	componentDidMount(){
		// console.log("params match url:",this.props.match.params.personid);
		this.props.loadPage('people/2'); //Hard coded
	}

	renderPage(personProps){
		// console.log("Wicked:",this.props);
		return (
		<div> Birth Year: 
		<span className="contentValue">
		{this.props.currentDetailPage.birth_year} 
		</span> 
		</div>
		);
	}

	render(){
		return(
		<div className="person">
			<img src="http://placehold.it/300x400" alt="" />
			{this.renderPage(this.props)}
		</div>
		);
	}
}

function mapStateToProps(state) {
	return { currentDetailPage: state.currentDetailPage.pageContent };
}

export default connect(mapStateToProps, { loadPage } )(Person);