const KEY = 'counters';

const data = {/*id: {title, note, count, root, requireCacheSync}*/};

export function getSavedData() {
	return JSON.parse(localStorage.getItem(KEY)) || {};
}

export function setSavedData(data) {
	localStorage.setItem(KEY, JSON.stringify(data));
}

export default data;