import React, { Component } from 'react';
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
  	console.log(window.innerWidth);
  	if(window.innerWidth > 620) {
  	if(!aurebeshMenu.style.display) {
  		aurebeshMenu.style.display = 'none';
  	}
  		aurebeshMenu.style.display === 'none' ? aurebeshMenu.style.display = 'block' : aurebeshMenu.style.display = 'none';
  	}
  }

  render() {
    return (
      <div className="app-main">

      	<img
      	className="menu-icon" onClick={this.openMenu}
      	src="src/assets/PowderBlueMenuIcon.png" alt="Menu icon"
      	/>
		<div className="menu-body-div">
			<div className="english-menu">
				Choose
				<ul>
					<li>People</li>
					<li>Planets</li>
					<li>Vehicles</li>
					<li>Starships</li>
				</ul>
			</div>
			<div className="aurebesh-menu">
				Choose
				<ul>
					<li>People</li>
					<li>Planets</li>
					<li>Vehicles</li>
					<li>Starships</li>
				</ul>
			</div>
		</div>
		{this.props.children}

      </div>
    );
  }
}
