import { EventEmitter } from 'events';
import dispatcher from '../dispatcher.jsx';

class ComicStore extends EventEmitter {
	constructor() {
		super();
		this.comics = [];
		this.active = null;
	}
	get() {
		return this.comics;
	}
	getActive() {
		return this.active;
	}
	setComics(data) {
		data.body.data.results.forEach(comic => {
			this.comics.push(comic);
		});
		this.emit('change');
	}
	setActiveComic(data) {
		this.active = data
		this.emit('setActive');
	}
	handler(action) {
		switch(action.type) {
			case 'RECEIVE_COMICS':
				this.setComics(action.data);
			break;
			case 'LAUNCH_COMIC':
				this.setActiveComic(action.data);
			break;
		}
	}
}

const comicStore = new ComicStore;

dispatcher.register(comicStore.handler.bind(comicStore));

export default comicStore;