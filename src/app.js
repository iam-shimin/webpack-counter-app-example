import createCounter from 'components/counter';
import createDrawer from 'components/drawer';
import createMessage from 'components/message';

import { getSavedData, setSavedData } from 'storage';


const [app] = document.getElementsByTagName('main');
const score = document.getElementById('score');
const addCounterButton = document.getElementById('add-counter');

// state
let currentCountersCount = {value: 0};
let messageDestroyFunction = {value: null}; // destroy function
let drawerUpdateFunction = {value: null};
const data = {/*id: {title, note, count, root, requireCacheSync}*/}

score.textContent = currentCountersCount.value;

addCounterButton.addEventListener('click', event => {
	const id = Date.now() + Math.random();
	if (currentCountersCount.value === 0 && messageDestroyFunction.value) {
		messageDestroyFunction.value();
		messageDestroyFunction.value = null;
	}

	++currentCountersCount.value;

	data[id] = {root: counterWithActions(id)};
	score.textContent = currentCountersCount.value;
})

function counterWithActions(id) {
	return createCounter(app, {
		dataId: id,
		onCounterBoxClick() {
			const dataId = this.dataId;
			if (drawerUpdateFunction.value) {
				drawerUpdateFunction.value(dataId);
			} else {
				drawerUpdateFunction.value = createDrawer(document.body, {
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
			--currentCountersCount.value;
			score.textContent = currentCountersCount.value;
			showMessage(currentCountersCount);
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
	if (currentCountersCount.value === 0) {
		// show message
		// const message = import('./messageComponent').then(module => {
		// 	messageDestroyFunction.value = module.default(app);
		// });
		messageDestroyFunction.value = createMessage(app);
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
	++currentCountersCount.value;
}

showMessage(currentCountersCount);
score.textContent = currentCountersCount.value;