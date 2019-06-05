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
  state = {
    movies: [],
  }

  async componentDidMount() {
    try {
      const result = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=cf9e03420f5ee2b7a0886f1120006c96&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const movies = await result.json();
      console.log(movies);
      this.setState({
        movies: movies.results,
      });
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Header />
          <Switch>
            <Route exact path='/' Component={Movie}>
              <ul>
                {this.state.movies.map(movie => (
                  <Movie key={movie.id} movie={movie} />
                ))}
              </ul>
            </Route>
            <Route exact path='/page' Component={Page} />
            <Route exact path='/${this.state.movie.id}' Component={MoviePage} />
          </Switch>
        </Fragment>
      </Router>
    );
  }
}
