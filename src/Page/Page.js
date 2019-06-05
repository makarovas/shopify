import React, { Component, Fragment } from 'react';
import "../index.scss";
import Movie from "../MoviesListItem/Movie";


export class Page extends Component {
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
			<div>
				{this.state.movies.map(movie => (
					<Movie key={movie.id} movie={movie} />
				))}
			</div>

		);
	}
}
