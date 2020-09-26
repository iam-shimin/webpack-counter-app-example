import createCounter from 'components/counter';
// import createDrawer from 'components/drawer';
// import createMessage from 'components/message';
import createScore from 'components/score';
import createAddButton from 'components/add-btn';

import 'style/index.css';

import data from 'provider';
import { getSavedData, setSavedData } from 'utils/storage';


const [app] = document.getElementsByTagName('main');
const scoreUpdateFunction = createScore();

// state
const state = {
	currentCountersCount: 0,
	messageDestroyFunction: null,
	drawerUpdateFunction: null
}

scoreUpdateFunction(state.currentCountersCount);

createAddButton(app, event => {
	const timestamp = Date.now();
	const id = timestamp + Math.random();
	if (state.currentCountersCount === 0 && state.messageDestroyFunction) {
		state.messageDestroyFunction();
		state.messageDestroyFunction = null;
	}

	++state.currentCountersCount;

	data[id] = {root: counterWithActions(id, timestamp), dateString: timestamp};
	scoreUpdateFunction(state.currentCountersCount);
});

function counterWithActions(id, time) {
	return createCounter(app, {
		dataId: id,
		dateString: time,
		onCounterBoxClick() {
			const dataId = this.dataId;
			if (state.drawerUpdateFunction) {
				state.drawerUpdateFunction(dataId);
			} else {
				import('components/drawer').then(({default: createDrawer}) => {
					state.drawerUpdateFunction = createDrawer(document.body, {
						id: dataId,
						onInput(id, name, value) {
							data[id][name] = value;
							if (name === 'title') {
								data[id].root.update(value);
							}
						}
					});
				});
			}
		},
		onDelete() {
			// check count, update score, show/hide message,
			--state.currentCountersCount;
			scoreUpdateFunction(state.currentCountersCount);
			showMessage(state.currentCountersCount);
			if (data[this.dataId].requireCacheSync) {
				const savedDataLocal = getSavedData();
				delete savedDataLocal[this.dataId];
				setSavedData(savedDataLocal);
			}
		},
		onCounterDataChange(name, value) {
			data[this.dataId][name] = value;
		},
		onSave(id) {
			const item = data[id];
			data[id].requireCacheSync = true;
			const savedData = getSavedData();
			const {title, dateString, note, count} = data[id];
			savedData[id] = {title, dateString, note, count};
			setSavedData(savedData);
		}
	});
}

function showMessage(currentCountersCount) {
	if (currentCountersCount === 0) {
		import(/* webpackPrefetch: true */'components/message').then(({default: createMessage}) => {
			state.messageDestroyFunction = createMessage(app);
		});
	}
}

const savedData = getSavedData();

for (let cId in savedData) {
	const {title, note, count, dateString} = savedData[cId] || {};
	data[cId] = {
		root: counterWithActions(cId, dateString),
		title,
		dateString,
		note,
		count,
		requireCacheSync: true
	};
	data[cId].root.update(title, count);
	++state.currentCountersCount;
}

showMessage(state.currentCountersCount);
scoreUpdateFunction(state.currentCountersCount);