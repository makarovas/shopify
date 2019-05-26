import React from 'react';
import App from './App';
import {
	BrowserRouter as Router,
	Link,
	Route,
	Switch,
} from 'react-router-dom';


const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/" component={App} />
			</Switch>
		</Router>
	);
};

export default Routes;