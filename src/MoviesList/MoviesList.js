import React, { Component } from 'react'

export default class MoviesList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			movies: [
				{
					id: 1,
					title: 'Star Wars'
				},
				{
					id: 2,
					title: 'Spider Man'
				},
				{
					id: 3,
					title: '1984'
				},
			]
		}
	}

	render() {
		return (
			<ul>
				{this.state.movies.map((movie) => (
					<li key={movie.id}>
						{movie.title}
					</li>
				))}
			</ul>
		)
	}
}
