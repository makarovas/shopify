import React, { Component, Fragment } from 'react';
import './index.scss'
import Header from './Header/Header';
import MoviesList from './MoviesList/MoviesList';

export class App extends Component {
  render() {
    return (
      <Fragment >
        <Header />
        <MoviesList />
      </Fragment >
    )
  }
}






