import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { loadPage } from '../actions/index';
import { swapLanguage } from '../actions/index';
import { clearCurrentPage } from '../actions/index';

class Vehicle extends React.Component{
	constructor(){
		super();
		this.makeAurebesh = this.makeAurebesh.bind(this);	
		this.language = 'english';	
		// this.renderSpecies = this.renderSpecies.bind(this);
	}

	componentDidMount(){
		// console.log("params match url:",this.props.params.personid);
		this.props.loadPage(`vehicles/${this.props.params.vehicleid}`); 
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
		resultsdiv.style.fontSize = "0.8em";
		resultsdiv.style.lineHeight = '1.6em';

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

		// console.log("Wichicle:",this.props);
		if(this.props.currentDetailPage.name){
			// console.log(this.props.currentDetailPage);
		return (

		<div className="pageContent">
		<h1>
		{this.props.currentDetailPage.name} 
		</h1> 

		<div className="field"> Model: 
		<span className="contentValue">
		{this.props.currentDetailPage.model} 
		</span> 
		</div>

		<div className="field"> Manufacturer: 
		<span className="contentValue">
		{this.props.currentDetailPage.manufacturer} 
		</span> 
		</div>

		<div className="field"> Cost in credits:
		<span className="contentValue">
		{this.props.currentDetailPage.cost_in_credits} 
		</span> 
		</div>

		<div className="field"> Length: 
		<span className="contentValue">
		{this.props.currentDetailPage.length} 
		</span> 
		</div>

		<div className="field"> Cargo Capacity: 
		<span className="contentValue">
		{this.props.currentDetailPage.cargo_capacity} 
		</span> 
		</div>

		<div className="field"> Consumables: 
		<span className="contentValue">
		{this.props.currentDetailPage.consumables} 
		</span> 
		</div>

		<div className="field"> Crew: 
		<span className="contentValue">
		{this.props.currentDetailPage.crew} 
		</span> 
		</div>

		<div className="field"> Max Atmosphering speed: 
		<span className="contentValue">
		{this.props.currentDetailPage.max_atmosphering_speed} 
		</span> 
		</div>

		<div className="field"> Passengers: 
		<span className="contentValue">
		{this.props.currentDetailPage.passengers} 
		</span> 
		</div>

		<div className="field"> Vehicle Class: 
		<span className="contentValue">
		{this.props.currentDetailPage.vehicle_class} 
		</span> 
		</div>
		<Link className="back" to="/vehicles"> Back to Vehicles </Link>

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

export default connect(mapStateToProps, { loadPage, swapLanguage, clearCurrentPage } )(Vehicle);