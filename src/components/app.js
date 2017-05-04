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
  	// if menu does not have a display property, set it to block. If it does have one, set it to none
  	englishMenu.style.display ? englishMenu.style.display = 'block' : englishMenu.style.display = 'none';
  	// The previous  statement inverts the case. This statement inverts it again.
  	englishMenu.style.display ==='none' ? englishMenu.style.display = 'block' : englishMenu.style.display = 'none';
  	console.log(window.innerWidth);
  	if(window.innerWidth > 620) {
  		aurebeshMenu.style.display ? aurebeshMenu.style.display = 'block' : aurebeshMenu.style.display = 'none';
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
				english stuff
			</div>
			<div className="aurebesh-menu">
				aurebesh stuff
			</div>
		</div>
		{this.props.children}

      </div>
    );
  }
}
