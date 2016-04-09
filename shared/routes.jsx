import React from 'react';
import { Route } from 'react-router';
import Home from 'components/Home';

import App from 'components';

export default (
	<Route path="/" name="app" component={App}>
		<Route component={Home} path="home" />
	</Route>
);