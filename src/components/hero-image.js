import React, { Component } from 'react';

export default class HeroImage extends Component {

componentDidMount() {
	let screenWidth = window.screen.width;
	const mainImage = document.querySelector('.image1');
	if (screenWidth > 620) {
	mainImage.src = 'src/assets/starwars2.png';
	}
}

  render() {
    return (
		<img className="image1" src="src/assets/starwars-620x620.png" alt="star wars" />
    );
  }
}
