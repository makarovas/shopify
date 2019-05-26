import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


export default class MoviesList extends Component {
	static propTypes = {
		movie: PropTypes.string
	}


	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			// <ul>
			// 	{this.state.movies.map((movie) => (
			// 		<li key={movie.id}>
			// 			<a
			// 			// to={`/movie${``}`}
			// 			>
			// 				{movie.title}
			// 			</a>
			// 		</li>
			// 	))}
			// </ul>

			<ul>
				<li>
					<h3>{this.props.movie.title}</h3>
					<p>{this.props.movie.desc}</p>
				</li>
			</ul>
		)
	}
}

// MoviesList.propTypes = {
// 	movie: PropTypes.string
// }

