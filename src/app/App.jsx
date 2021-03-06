import React, { Component } from 'react';
import dispatcher from '../dispatcher.jsx';

import './App.scss';

import * as ComicActions from '../actions/ComicActions.jsx';
import ComicStore from '../store/ComicStore.jsx';
import Loader from '../component/Loader.jsx';
import Grid from '../component/Grid.jsx';
import Overlay from '../component/Overlay.jsx';

class App extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			active: {},
			loading: true,
			overlay: false
		};
		this.setData = this.setData.bind(this);
		this.setActiveComic = this.setActiveComic.bind(this);
		this.renderOverlay = this.renderOverlay.bind(this);
		this.removeOverlay = this.removeOverlay.bind(this);
		this.body = document.getElementsByTagName('body')[0];
	}
	componentWillMount() {
		ComicActions.makeRequest();
		ComicStore.on('change', this.setData);
		ComicStore.on('setActive', this.setActiveComic);
	}
	componentWillUnmount() {
	 	ComicStore.removeListener('change', this.setData);
	 	ComicStore.removeListener('setActive', this.setActiveComic);
	}
	setData() {
		this.setState({
			data: ComicStore.get(),
			loading: false
		});
	}
	setActiveComic() {
		this.setState({
			overlay: true,
			active: ComicStore.getActive()
		});
	}
	renderOverlay(){
		if(this.state.overlay) {
			this.body.style.overflow = 'hidden';
			return (
				<Overlay item={this.state.active} 
						 show={this.state.overlay} 
						 onClose={this.removeOverlay} />
			);
		}
	}
	removeOverlay() {
		this.body.style.overflow = 'auto';
		this.setState({
			overlay: false,
			active: {}
		});
	}
	render() {
		if(this.state.loading) {
			return <Loader />;
		}
		return(
			<div className="App">
				<header className="App__header">
					<h1 className="App__title">
						Marvel Comics
					</h1>
				</header>
				<div className="App__body">
					<Grid items={this.state.data} />
				</div>
				<div className="App__attribution">
					&copy; 2016 Marvel
				</div>
				{this.renderOverlay()}
			</div>
		);
	}
}

export default App;