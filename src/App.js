import React, { Component, Fragment } from 'react';
import './index.scss'
import Header from './Header/Header';
import MoviesList from './MoviesList/MoviesList';


const movies = [
  {
    id: 1,
    title: 'Star Wars',
    desc: 'Fantasy'
  },
  {
    id: 2,
    title: 'Spider Man',
    desc: 'Anime'
  },
  {
    id: 3,
    title: '1984',
    desc: 'Horror'
  },
];

export class App extends Component {
  render() {
    return (
      <Fragment >
        <Header />
        {movies.map(movie => (
          <MoviesList key={movie.id} movie={movie} desc={movie.desc} />
        ))}

      </Fragment >
    )
  }
}






