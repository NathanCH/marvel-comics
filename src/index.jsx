import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

import App from './app/App.jsx';

ReactDOM.render(
	<App />,
	document.getElementById('app')
);