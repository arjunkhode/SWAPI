import React, { Component } from 'react';
import HeroImage from './hero-image.js';
// To change bg image for large screen sizes, edit the following line
// mainImage.src="assets/starwars2.png";	

export default class App extends Component {



  render() {
    return (
      <div className="app-main">

		<HeroImage />

      </div>
    );
  }
}
