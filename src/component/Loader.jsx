import React, { Component } from 'react';

import './Loader.scss';

class Loader extends Component {
	render() {
		return(
			<div className="Loader">
				<i className="ion ion-load-c"></i>
			</div>
		);
	}
}

export default Loader;