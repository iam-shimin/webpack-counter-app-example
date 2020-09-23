const KEY = 'counters';

function getSavedData() {
	return JSON.parse(localStorage.getItem(KEY)) || {};
}

function setSavedData(data) {
	localStorage.setItem(KEY, JSON.stringify(data));
}