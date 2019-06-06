import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

let POSTER_WIDTH = `w200`;
const POSTER_PATH = `http://image.tmdb.org/t/p/${POSTER_WIDTH}`;

export default class Movie extends Component {
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
	static propTypes = {
		movie: PropTypes.shape({
			title: PropTypes.string.isRequired,
		}).isRequired,
	}
	render() {
		console.log(this.state.movies)
		return (
			<ul>
				{this.state.movies.map(movie => (
					<li key={movie.id} movie={movie}>
						< h3 > {this.props.movie.title}</h3>
						<Link to='/page'>
							<img src={`${POSTER_PATH}${this.props.movie.poster_path}`} alt={this.props.movie.title} />
						</Link>
					</li >
				))}
			</ul>
		)
	}
}
