import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import sinon from 'sinon';

import * as ComicActions from '../actions/ComicActions.jsx';
import ComicStore from './ComicStore.jsx';

describe('Comic store', function() {

	beforeEach(function() {
		this.xhr = sinon.useFakeXMLHttpRequest();

		this.requests = [];
		this.xhr.onCreate = xhr => {
			this.requests.push(xhr);
		};
	});

	afterEach(function() {
		this.xhr.restore();
	});

	it('requests comics', function() {
		// ...
	});
});