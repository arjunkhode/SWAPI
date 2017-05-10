import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HeroImage from './components/hero-image';
import People from './components/people';
import Planets from './components/planets';
import Planet from './components/planet';
import Person from './components/person';
import Vehicles from './components/vehicles';
import Vehicle from './components/vehicle';
import Starships from './components/starships';
import Starship from './components/starship';
// import SearchResults from './components/searchResults';

export default(
	<Route path="/" component={App} >
		<IndexRoute component={HeroImage} />
		<Route path="people" component={People} />
		<Route path="people/:personid" component={Person} />
		<Route path="planets" component={Planets} />
		<Route path="planets/:planetid" component={Planet} />
		<Route path="vehicles" component={Vehicles} />
		<Route path="vehicles/:vehicleid" component={Vehicle} />
		<Route path="starships" component={Starships} />
		<Route path="starships/:starshipid" component={Starship} />
	</Route>
);
