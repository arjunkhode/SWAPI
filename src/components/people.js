import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPeople } from '../actions/index';
import { swapLanguage } from '../actions/index';

class People extends React.Component{

constructor(){
	super();
	this.renderPeople = this.renderPeople.bind(this);
	this.makeAurebesh = this.makeAurebesh.bind(this);
	this.language = 'english';
}

componentDidMount(){
	this.props.fetchPeople();
	// let peopleData = {};
	// stuff.payload.then(data => data.json()).then((data) => {peopleData = data});
}

makeAurebesh(){
	const resultsdiv = document.querySelector('ul.results');
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
		console.log("state lang was:",this.props.language);
		this.props.swapLanguage('english');
		console.log("state lang was:",this.props.language);

	}
}

renderPeople(peopleprops){
	// console.log("lee",peopleprops.items.results);
	if(peopleprops.items.results){
		
		if(peopleprops.items.results.length)

		return peopleprops.items.results.map((person) => {
			return(
			<li key={person.name} className="result"> {person.name} </li>
			) });
	}
					
}

render() {
	console.log("thisisit:",this.props);
	return(
		<div className="people">
			<button className="aurebesh-btn" onClick={this.makeAurebesh}> Aurebesh</button>
			<ul className="results">
				{this.renderPeople(this.props)}
			</ul>
		</div>
	);
	}
}

function mapStateToProps(state) {
	return { items: state.items.all, language: state.language.lang };
}

export default connect(mapStateToProps, { fetchPeople, swapLanguage })(People);
