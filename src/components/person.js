import React from 'react';

export default class Person extends React.Component{
	render(){
		return(
		<div className="person">
			Hello I am a person
			<img src="http://placehold.it/300x400" alt="" />
		</div>
		);
	}
}