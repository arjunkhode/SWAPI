import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { loadPage } from '../actions/index';
import { swapLanguage } from '../actions/index';
import { clearCurrentPage } from '../actions/index';

class Person extends React.Component{
	constructor(){
		super();
		this.makeAurebesh = this.makeAurebesh.bind(this);	
		this.language = 'english';	
		// this.renderSpecies = this.renderSpecies.bind(this);
	}

	componentDidMount(){
		// console.log("params match url:",this.props.params.personid);
		this.props.loadPage(`people/${this.props.params.personid}`); 
	}

	// Clear currentpage so prev page doesnt show while new page loads here
	componentWillUnmount(){
		this.props.clearCurrentPage();
	}


makeAurebesh(){
	const resultsdiv = document.querySelector('.person');
	// console.log("The current language from the state is:", this.props.language);
	if(this.props.language === 'english'){
		resultsdiv.style.fontFamily = "Aurebesh, Arial";
		resultsdiv.style.lineHeight = 1.6;

		// this.language = 'aurebesh';
		// console.log("state lang was:",this.props.language);
		this.props.swapLanguage('aurebesh');
	}
	else{
		resultsdiv.style.fontFamily = "Baloo, Arial";
		// this.language = 'english';
		// console.log("state lang was:",this.props.language);
		this.props.swapLanguage('english');
		// console.log("state lang was:",this.props.language);
	}
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

	renderPage(){
		// console.log("Wicked:",this.props);
		if(this.props.currentDetailPage.name){
		return (

		<div className="pageContent">
		<h1>
		{this.props.currentDetailPage.name} 
		</h1> 

		<div className="field"> <span className="labl"> Birth Year: </span> 
		<span className="contentValue">
		{this.props.currentDetailPage.birth_year} 
		</span> 
		</div>

		<div className="field"> <span className="labl"> Eye Color: </span>
		<span className="contentValue">
		{this.props.currentDetailPage.eye_color} 
		</span> 
		</div>

		<div className="field"> <span className="labl"> Gender: </span>
		<span className="contentValue">
		{this.props.currentDetailPage.gender} 
		</span> 
		</div>

		<div className="field"> <span className="labl"> Hair Color: </span>
		<span className="contentValue">
		{this.props.currentDetailPage.hair_color} 
		</span> 
		</div>

		<div className="field"> <span className="labl"> Height: </span>
		<span className="contentValue">
		{this.props.currentDetailPage.height} 
		</span> 
		</div>

		<div className="field"> <span className="labl"> Mass:</span>
		<span className="contentValue">
		{this.props.currentDetailPage.mass} 
		</span> 
		</div>

		<div className="field"> <span className="labl"> Skin Color: </span>
		<span className="contentValue">
		{this.props.currentDetailPage.skin_color} 
		</span> 
		</div>

		<div className="field"> 
			<Link to={`/planets/${this.props.currentDetailPage.homeworld.split('/')[5]}`}> 
			Homeworld
			</Link> 
		</div>

		<Link className="back" to="/people"> Back to People </Link>

		</div>
		); }
	}

	render(){
		return(
		<div className="person">
		<button className="aurebesh-btn" onClick={this.makeAurebesh}> Aurebesh</button>
			{this.renderPage()}
		</div>
		);
	}
}

function mapStateToProps(state) {
	return { 
	currentDetailPage: state.currentDetailPage ? state.currentDetailPage.pageContent: <div>Loading...</div>,
	language: state.language.lang };
}

export default connect(mapStateToProps, { loadPage, swapLanguage, clearCurrentPage } )(Person);