const counterContent = `
<header>
	<h3>No Title</h3>
	<div>
		<time>12:34 pm</time>
	</div>
</header>
<div class="count-actions">
	<button class="btn btn-round">+</button>
	<input type="number" name="count" />
	<button class="btn btn-round">-</button>
</div>
<div class="counter-actions">
	<button class="btn">Save</button>
	<button class="btn">Delete</button>
</div>`;

// export default 
const createCounter = function create(parent = document.body, props) {
	const state = {
		title: null,
		count: null
	};

	const node = document.createElement('article');
	node.innerHTML = counterContent;

	const [plusButton, minusButton, saveButton, deleteButton] = node.getElementsByTagName('button');
	const [input] = node.getElementsByTagName('input');
	const [titleNode] = node.getElementsByTagName('h3');
	parent.appendChild(node);

	node.addEventListener('click', event => {
		if (event.target.tabIndex < 0) {
			props.onCounterBoxClick(props.dataId);
		}
	});

	plusButton.addEventListener('click', event => {
		const sum = (input.valueAsNumber || 0)  + 1;
		input.value = sum;
		props.onCounterDataChange('count', sum);
	})

	minusButton.addEventListener('click', event => {
		const diff = (input.valueAsNumber || 0) - 1;
		input.value = diff;
		props.onCounterDataChange('count', diff);
	})

	deleteButton.addEventListener('click', event => {
		distroy();
		props.onDelete(); // check count, update score, show/hide message,
		// if (noOfArticles === 0) {
			// const msg = document.createElement('span');
			// msg.className = 'msg';
			// msg.textContent = 'No active counters exist';
			// main.appendChild(msg);
		// }
	})

	saveButton.addEventListener('click', event => {
		props.onSave(props.dataId);
	})

	// LIFECYCLE

	function update(title, count) {
		if (state.title !== title) {
			titleNode.textContent = title;
			props.onCounterDataChange('title', title);
		}

		if (state.count !== count) {
			input.valueAsNumber = count;
			props.onCounterDataChange('count', count);
		}
	}

	function distroy() {
		node.remove();
	}

	return {update, distroy}
}