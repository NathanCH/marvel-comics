import dispatcher from '../dispatcher.jsx';

import request from 'superagent';

export function makeRequest(id) {
	request
		.get('http://gateway.marvel.com:80/v1/public/comics?format=comic&apikey=f8c48baad7eb594ac76e947774e18978')
		.end((error, response) => {
			dispatcher.dispatch({
				type: 'RECEIVE_COMICS',
				data: response
			});
		});
}

export function launchComic(comicData) {
	dispatcher.dispatch({
		type: 'LAUNCH_COMIC',
		data: comicData
	});
}