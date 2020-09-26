const KEY = 'counters';

export function getSavedData() {
	return JSON.parse(localStorage.getItem(KEY)) || {};
}

export function setSavedData(data) {
	localStorage.setItem(KEY, JSON.stringify(data));
}