import React, { Component } from 'react';

import './Overlay.scss';

import Comic from './Comic.jsx';

class Overlay extends Component{
	constructor(){
		super();
		this.handleClose = this.handleClose.bind(this);
	}
	handleClose() {
		this.props.onClose();
	}
	getSrc() {
		return this.props.item.thumbnail.path + '.' + this.props.item.thumbnail.extension;
	}
	render() {
		var item = this.props.item;
		var description = item.description !== null ? item.description : 'No Description';
		var styles = {
			backgroundImage: 'url('+this.getSrc()+')'
		};
		return(
			<div className="Overlay">
				<div className="Overlay__container">
					<div className="Overlay__graphic">
						<div className="Overlay__image" style={styles}></div>
					</div>
					<div className="Overlay__meta">
						<div className="Overlay__comic-info">
							<div className="ComicInfo">
								<h2 className="ComicInfo__title">{item.title}</h2>
								<p className="ComicInfo__text">{description}</p>
								<a className="ComicInfo__btn" href={item.urls[0].url}>
									<i className="ion-link"></i> Marvel.com
								</a>
							</div>
						</div>
						<div className="Overlay__btn-group">
							<div className="Overlay__btn">
								<i className="ion-android-share-alt"></i>
							</div>
							<div className="Overlay__btn">
								<i className="ion-android-favorite-outline"></i>
							</div>
							<div className="Overlay__btn" onClick={this.handleClose}>
								<i className="ion-android-close"></i>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

Overlay.propTypes = {
	item: React.PropTypes.object,
	visible: React.PropTypes.bool
};

Overlay.defaultProps = {
	item: {},
	visible: false
};


export default Overlay;