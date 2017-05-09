import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { loadPage } from '../actions/index';
import { swapLanguage } from '../actions/index';
import { clearCurrentPage } from '../actions/index';

class Planet extends React.Component{
	constructor(){
		super();
		this.makeAurebesh = this.makeAurebesh.bind(this);		
		// this.renderSpecies = this.renderSpecies.bind(this);
	}

	componentDidMount(){
		// console.log("params match url:",this.props.params.personid);
		this.props.loadPage(`planets/${this.props.params.planetid}`); 
	}

	componentDidUpdate(){
		if(document.querySelector('.waterContent')){
		let waterContent = document.querySelector('.waterContent');
		waterContent.style.width = `${this.props.currentDetailPage.surface_water}px`;
		}
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
			console.log(this.props.currentDetailPage);
		return (

		<div className="pageContent">
		<h1>
		{this.props.currentDetailPage.name} 
		</h1> 

		<div className="field"> Rotation Period: 
		<span className="contentValue">
		{this.props.currentDetailPage.rotation_period} 
		</span> 
		</div>

		<div className="field"> Orbital Period: 
		<span className="contentValue">
		{this.props.currentDetailPage.orbital_period} 
		</span> 
		</div>

		<div className="field"> Diameter: 
		<span className="contentValue">
		{this.props.currentDetailPage.diameter} 
		</span> 
		</div>

		<div className="field"> Climate: 
		<span className="contentValue">
		{this.props.currentDetailPage.climate} 
		</span> 
		</div>

		<div className="field"> Gravity: 
		<span className="contentValue">
		{this.props.currentDetailPage.gravity} 
		</span> 
		</div>

		<div className="field"> Population: 
		<span className="contentValue">
		{this.props.currentDetailPage.population} 
		</span> 
		</div>

		<div className="field"> Surface Water: 
		<div className="contentValue water">
		<div className="waterContent"> </div>
		</div> 
		</div>

		<div className="field"> Terrain: 
		<span className="contentValue">
		{this.props.currentDetailPage.terrain} 
		</span> 
		</div>



		<Link className="back" to="/planets"> Back to Planets </Link>

		</div>
		); 

		}
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

export default connect(mapStateToProps, { loadPage, swapLanguage, clearCurrentPage } )(Planet);