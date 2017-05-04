import React from 'react';
import { Route, IndexRoute} from 'react-router';
import App from './components/app';
import HeroImage from './components/hero-image';

export default(
	<Route path="/" component={App} >
		<IndexRoute component={HeroImage} />

	</Route>
);