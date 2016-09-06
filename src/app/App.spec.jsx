import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

import App from './App.jsx';

describe('Application component', function() {

	beforeEach(function() {
		this.component = TestUtils.renderIntoDocument(<App />);
		this.component.setState({loading: false});
		this.renderedDOM = () => ReactDOM.findDOMNode(this.component);
	});

	it('renders the application container.', function() {
		let rootElement = this.renderedDOM();

		expect(rootElement.tagName).toEqual('DIV');
		expect(rootElement.classList.length).toEqual(1);
		expect(rootElement.classList[0]).toEqual('App');
	});
});