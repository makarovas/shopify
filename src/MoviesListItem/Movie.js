import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

let POSTER_WIDTH = `w200`;
const POSTER_PATH = `http://image.tmdb.org/t/p/${POSTER_WIDTH}`;

export default class Movie extends Component {
	static propTypes = {
		movie: PropTypes.shape({
			title: PropTypes.string.isRequired,
		}).isRequired,
	}


	render() {
		return (
			<li>
				<h3>{this.props.movie.title}</h3>
				<img src={`${POSTER_PATH}${this.props.movie.poster_path}`} alt={this.props.movie.title} />
			</li>

		)
	}
}
