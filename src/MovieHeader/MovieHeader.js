import React from 'react';
import PropTypes from 'prop-types';

export default class MovieHeader extends Component {


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
