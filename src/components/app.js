import React, { Component } from 'react';

// To change bg image for large screen sizes, edit the following line
// mainImage.src="assets/starwars2.png";	

export default class App extends Component {

componentDidMount() {
	var screenWidth = window.screen.width;
	var mainImage = document.querySelector('.image1');
	if(screenWidth>620) {
	mainImage.src="src/assets/starwars2.png";
	}
}

  render() {
    return (
      <div className="app-main">

		<img className="image1" src="src/assets/starwars-620x620.png" alt="star wars" />

      </div>
    );
  }
}
