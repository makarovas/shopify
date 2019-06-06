import React, { Component, Fragment } from 'react';
import "../index.scss";
import Header from "../Header/Header";
import Movie from "../MoviesListItem/Movie";
import { Page } from '../Page/Page'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import MoviePage from './../MoviePage/MoviePage'

export class App extends Component {
  // eslint-disable-next-line


  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path='/' Component={Movie} />
            <Route path='/page' Component={Page} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
