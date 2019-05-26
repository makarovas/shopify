import React from 'react';
import PropTypes from 'prop-types';

export default class MovieHeader extends Component {
	// const movie = [
	// 	{
	// 		id: 1,
	// 		title: 'Star Wars',
	// 		desc: 'Fantasy'
	// 	},
	// 	{
	// 		id: 2,
	// 		title: 'Spider Man',
	// 		desc: 'Anime'
	// 	},
	// 	{
	// 		id: 3,
	// 		title: '1984',
	// 		desc: 'Horror'
	// 	},
	// ]

	static propTypes = {
		movie: PropTypes.object
	}
	render() {
		return (
			<div>
				<h3>{this.props.title}</h3>
				<p>{this.props.desc}</p>
			</div>
		)
	}
}
