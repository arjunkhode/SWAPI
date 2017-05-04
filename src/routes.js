import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import HeroImage from './components/hero-image';
import People from './components/people';

export default(
	<Route path="/" component={App} >
		<IndexRoute component={HeroImage} />
		<Route path="people" component={People} />
	</Route>
);
