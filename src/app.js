import createCounter from 'components/counter';
import createDrawer from 'components/drawer';
import createMessage from 'components/message';
import createScore from 'components/score';

import 'style/index.css';

import data, { getSavedData, setSavedData } from 'storage';


const [app] = document.getElementsByTagName('main');
const scoreUpdateFunction = createScore();
const addCounterButton = document.getElementById('add-counter');

// state
const state = {
	currentCountersCount: 0,
	messageDestroyFunction: null,
	drawerUpdateFunction: null
}

scoreUpdateFunction(state.currentCountersCount);

addCounterButton.addEventListener('click', event => {
	const id = Date.now() + Math.random();
	if (state.currentCountersCount === 0 && state.messageDestroyFunction) {
		state.messageDestroyFunction();
		state.messageDestroyFunction = null;
	}

	++state.currentCountersCount;

	data[id] = {root: counterWithActions(id)};
	scoreUpdateFunction(state.currentCountersCount);
})

function counterWithActions(id) {
	return createCounter(app, {
		dataId: id,
		onCounterBoxClick() {
			const dataId = this.dataId;
			if (state.drawerUpdateFunction) {
				state.drawerUpdateFunction(dataId);
			} else {
				state.drawerUpdateFunction = createDrawer(document.body, {
					id: dataId,
					onInput(id, name, value) {
						data[id][name] = value;
						if (name === 'title') {
							data[id].root.update(value);
						}
					}
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
			const {title, note, count} = data[id];
			savedData[id] = {title, note, count};
			setSavedData(savedData);
		}
	});
}

function showMessage(currentCountersCount) {
	if (currentCountersCount === 0) {
		// show message
		// const message = import('./messageComponent').then(module => {
		// 	messageDestroyFunction.value = module.default(app);
		// });
		state.messageDestroyFunction = createMessage(app);
	}
}

const savedData = getSavedData();

for (let cId in savedData) {
	const {title, note, count} = savedData[cId] || {};
	data[cId] = {
		root: counterWithActions(cId),
		title,
		note,
		count,
		requireCacheSync: true
	};
	data[cId].root.update(title, count);
	++state.currentCountersCount;
}

showMessage(state.currentCountersCount);
scoreUpdateFunction(state.currentCountersCount);