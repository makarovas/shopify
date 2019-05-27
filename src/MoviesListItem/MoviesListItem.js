import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default class MoviesListItem extends Component {
	static propTypes = {
		movie: PropTypes.shape({
			title: PropTypes.string.isRequired,
		})
	}

	render() {
		return (
			<ul>
				<li>
					<h3>{this.props.movie.title}</h3>
					<p>{this.props.movie.release_date}</p>
					<p>{this.props.movie.vote_average}</p>
				</li>
			</ul>
		)
	}
}
