import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { fetchPeople } from '../actions/index';
import { swapLanguage } from '../actions/index';
import { setPage } from '../actions/index';

class People extends React.Component{

constructor(){
	super();
	this.renderPeople = this.renderPeople.bind(this);
	this.makeAurebesh = this.makeAurebesh.bind(this);
	this.prevPage = this.prevPage.bind(this);
	this.nextPage = this.nextPage.bind(this);
	this.language = 'english';
	this.trial = this.trial.bind(this);
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

prevPage(){
	let currentPage = this.props.currentPage;
	console.log("CUrrent page is:",this.props.currentPage);
	if (this.props.currentPage - 1 > 0) {
	this.props.setPage(this.props.currentPage-1);
	this.props.fetchPeople(this.props.currentPage-1);
	}
	console.log("The new page is 1 more than above");
}
nextPage(){
	let currentPage = this.props.currentPage;
	console.log("CUrrent page is:",this.props.currentPage);
	this.props.setPage(this.props.currentPage+1);
	this.props.fetchPeople(this.props.currentPage+1);
	console.log("The new page is 1 more than above");
}

trial(){
	console.log("For the trial");
}

renderPeople(peopleprops){
	// console.log("lee",peopleprops.items.results);
	if(peopleprops.items.results){
		
		if(peopleprops.items.results.length)

		return peopleprops.items.results.map((person) => {
			return(
			<li onClick={this.trial} key={person.name} className="result"> {person.name} </li>
			) });
	}
					
}

render() {
	// console.log("thisisit:",this.props);
	return(
		<div className="people">
			<button className="aurebesh-btn" onClick={this.makeAurebesh}> Aurebesh</button>
			<ul className="results">
				{this.renderPeople(this.props)}
			</ul>
			<div className="nav">
				<div onClick={this.prevPage} className="prev"> &lt; </div>
				<div onClick={this.nextPage} className="next"> &gt; </div>
			</div>
		</div>
	);
	}
}

function mapStateToProps(state) {
	return { items: state.items.all,
		currentPage: state.currentPage.page,
		language: state.language.lang };
}

export default connect(mapStateToProps, { fetchPeople, swapLanguage, setPage })(People);
