/* eslint-disable */
import React from 'react'; // eslint-disable-line eslint(linebreak-style);
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
} from 'react-router-dom';
import App from './App';


const Routes = () => (
  <Router>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </Router>
);

export default Routes;
