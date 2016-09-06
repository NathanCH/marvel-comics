import React, { Component } from 'react';
import dispatcher from '../dispatcher.jsx';

import './Comic.scss';

import * as ComicActions from '../actions/ComicActions.jsx';

class Comic extends Component{
	constructor() {
		super();
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick() {
		ComicActions.launchComic(this.props.data);
	}
	getSrc() {
		return this.props.data.thumbnail.path + '.' + this.props.data.thumbnail.extension;
	}
	render() {
		var styles = {
			backgroundImage: 'url('+this.getSrc()+')'
		};
		return(
			<div className="Comic">
				<div className="Comic__thumbnail" 
					 onClick={this.handleClick} 
					 style={styles}>
				</div>
				<div className="Comic__details">
					<div className="Comic__title" title={this.props.data.title}>
						{this.props.data.title}
					</div>
				</div>
			</div>
		)
	}
}

Comic.propTypes = {
	data: React.PropTypes.object
};

Comic.defaultProps = {
	data: {}
}

export default Comic;