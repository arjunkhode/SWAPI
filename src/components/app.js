import React, { Component } from 'react';
import { Link } from 'react-router';
import HeroImage from './hero-image.js';
// To change bg image for large screen sizes, edit the following line
// mainImage.src="assets/starwars2.png";

export default class App extends Component {
  constructor() {
  	super();
  	this.openMenu = this.openMenu.bind(this);
  }

  openMenu() {
  	const englishMenu = document.querySelector('.english-menu');
  	const aurebeshMenu = document.querySelector('.aurebesh-menu');
  	// if menu does not have a display property, set it to none.
  	if(!englishMenu.style.display) {
  		englishMenu.style.display = 'none';
  	}
  	// Toggle the display of the menu
  	englishMenu.style.display ==='none' ? englishMenu.style.display = 'block' : englishMenu.style.display = 'none';
  	if(window.innerWidth > 620) {
  	if(!aurebeshMenu.style.display) {
  		aurebeshMenu.style.display = 'none';
  	}
  	aurebeshMenu.style.display === 'none' ? aurebeshMenu.style.display = 'block' : aurebeshMenu.style.display = 'none';
  	}
  	const ul_eng = document.querySelectorAll('.english-menu ul a');
  	const ul_aur = document.querySelectorAll('.aurebesh-menu ul a');
  	const ulist= [...ul_eng, ...ul_aur];
  	console.log(ulist);
  	ulist.map((listitem) => {listitem.addEventListener('click', function(){
  		englishMenu.style.display = 'none';
  		aurebeshMenu.style.display = 'none';
  	})});
  }

  render() {
    return (
      <div className="app-main">
		<div className="app-children">
			{this.props.children}
		</div>
      	<img
      	className="menu-icon" onClick={this.openMenu}
      	src="src/assets/PowderBlueMenuIcon.png" alt="Menu icon"
      	/>
		<div className="menu-body-div">
			<div className="english-menu">
				Choose
				<ul>
					<Link to="/people"><li>People</li></Link>
					<Link to="/planets"><li>Planets</li></Link>
					<Link to="vehicles"><li>Vehicles</li></Link>
					<Link to="/starships"><li>Starships</li></Link>
				</ul>
			</div>
			<div className="aurebesh-menu">
				Choose
				<ul>
					<Link to="/people"><li>People</li></Link>
					<Link to="/planets"><li>Planets</li></Link>
					<Link to="vehicles"><li>Vehicles</li></Link>
					<Link to="/starships"><li>Starships</li></Link>
				</ul>
			</div>
		</div>

      </div>
    );
  }
}
