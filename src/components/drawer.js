import data from 'storage';

const drawerContents = `
<header id="title-bar">
	<h1 contenteditable="true">{title}</h1>
	<button class="btn" style="border: solid 0.15em">X</button>
</header>
<p id="note" contenteditable="true">{note}</p>`;

export default function create(parent = document.body, props) {
	const state = {
		isOpen: false,
		currentId: null
	};

	const node = document.createElement('section');
	node.id = "drawer";
	node.className = "draw-over";
	node.innerHTML = drawerContents;
	parent.appendChild(node);

	const [title] = node.getElementsByTagName('h1');
	const [note] = node.getElementsByTagName('p');
	const [closeButton] = node.getElementsByTagName('button');

	closeButton.addEventListener('click', event => {
		update(state.currentId);
	});

	title.addEventListener('input', event => {
		props.onInput(state.currentId, 'title', event.currentTarget.textContent);
	})

	note.addEventListener('input', event => {
		props.onInput(state.currentId, 'note', event.currentTarget.textContent);
	})

	function update(id) {
		const isToggleStateAction = id === state.currentId;
		const isDrawerOpenAction = id !== state.currentId && !state.isOpen;
		if (isToggleStateAction || isDrawerOpenAction) {
			requestAnimationFrame(() => {
				requestAnimationFrame(toggleDrawer);
			});
		}

		if (isToggleStateAction) return;

		const titleText = (data[id] && data[id].title) || 'No title';
		const noteText = (data[id] && data[id].note) || 'No note';
		title.textContent = titleText;
		note.textContent = noteText;
		state.currentId = id;
	}

	update(props.id);

	function toggleDrawer() {
		drawer.classList.toggle('open');
		state.isOpen = !state.isOpen;
	}

	return update;
}