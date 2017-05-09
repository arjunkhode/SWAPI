import React from 'react';
import { connect } from 'react-redux';
import { loadPage } from '../actions/index';

class Person extends React.Component{
	constructor(){
		super();
		// this.renderSpecies = this.renderSpecies.bind(this);
	}

	componentDidMount(){
		// console.log("params match url:",this.props.params.personid);
		this.props.loadPage(`people/${this.props.params.personid}`); //Hard coded
	}

	// renderSpecies(){
	// 	if(this.props.currentDetailPage.species){
	// 		if(this.props.currentDetailPage.species.length){
	// 			this.props.currentDetailPage.species.map((speci) => {
	// 				console.log(speci);
	// 				return(
	// 					<span> speci </span>
	// 				);
	// 			});
	// 		}
	// 	}
	// }

	renderPage(personProps){
		console.log("Wicked:",this.props);
		return (

		<div className="pageContent">
		<h1>
		{this.props.currentDetailPage.name} 
		</h1> 

		<div className="field"> Birth Year: 
		<span className="contentValue">
		{this.props.currentDetailPage.birth_year} 
		</span> 
		</div>

		<div className="field"> Eye Color: 
		<span className="contentValue">
		{this.props.currentDetailPage.eye_color} 
		</span> 
		</div>

		<div className="field"> Gender: 
		<span className="contentValue">
		{this.props.currentDetailPage.gender} 
		</span> 
		</div>

		<div className="field"> Hair Color: 
		<span className="contentValue">
		{this.props.currentDetailPage.hair_color} 
		</span> 
		</div>

		<div className="field"> Height: 
		<span className="contentValue">
		{this.props.currentDetailPage.height} 
		</span> 
		</div>

		<div className="field"> Home World: 
		<span className="contentValue">
		{this.props.currentDetailPage.homeworld} 
		</span> 
		</div>

		<div className="field"> Mass:
		<span className="contentValue">
		{this.props.currentDetailPage.mass} 
		</span> 
		</div>

		<div className="field"> Skin Color: 
		<span className="contentValue">
		{this.props.currentDetailPage.skin_color} 
		</span> 
		</div>



		</div>
		);
	}

	render(){
		return(
		<div className="person">
			{this.renderPage(this.props)}
		</div>
		);
	}
}

function mapStateToProps(state) {
	return { currentDetailPage: state.currentDetailPage.pageContent };
}

export default connect(mapStateToProps, { loadPage } )(Person);