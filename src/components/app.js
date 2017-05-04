import React, { Component } from 'react';
import HeroImage from './hero-image.js';
// To change bg image for large screen sizes, edit the following line
// mainImage.src="assets/starwars2.png";

export default class App extends Component {

  render() {
    return (
      <div className="app-main">

      	<img className="menu-icon" src="src/assets/PowderBlueMenuIcon.png" alt="Menu icon" />
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
