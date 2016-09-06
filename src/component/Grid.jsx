import React, { Component } from 'react';

import './Grid.scss';

import Comic from './Comic.jsx';

class Grid extends Component{
	render() {
		return(
			<div className="Grid">
				{this.props.items.map((item, i) => {
					return (
						<div key={i} className="Grid__item">
							<Comic data={item} />
						</div>
					);
				})}
			</div>
		)
	}
}

Grid.propTypes = {
	items: React.PropTypes.array
};

Grid.defaultProps = {
	items: []
}

export default Grid;