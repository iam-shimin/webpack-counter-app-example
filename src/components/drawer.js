import data from 'provider';
import { createElement } from 'utils/dom';

const drawerContents = `
<header id="title-bar">
	<h1 contenteditable="true">{title}</h1>
	<button class="btn" style="border: solid 0.15em">X</button>
</header>
<p id="note" contenteditable="true">{note}</p>`;

const placeholderTitle = 'No title';
const placeholderNote = 'You can add more details about this counter here ...';

export default function create(parent = document.body, props) {
	const state = {
		isOpen: false,
		currentId: null
	};

	const node = createElement('section', {
		id: 'drawer',
		className: 'draw-over',
		innerHTML: drawerContents
	});
	parent.appendChild(node);

	const [title] = node.getElementsByTagName('h1');
	const [note] = node.getElementsByTagName('p');
	const [closeButton] = node.getElementsByTagName('button');

	closeButton.addEventListener('click', event => {
		update(state.currentId);
	});

	window.addEventListener('keydown', event => {
		if (state.isOpen && event.key === 'Escape') {
			update(state.currentId);
		}
	})

	title.addEventListener('input', event => {
		props.onInput(state.currentId, 'title', event.currentTarget.textContent);
	})

	note.addEventListener('input', event => {
		props.onInput(state.currentId, 'note', event.currentTarget.textContent);
	})

	function update(id) {
		const isToggleStateAction = id === state.currentId || state.currentId === null;
		const isDrawerOpenAction = !state.isOpen;
		const isChangeContentAction = id !== state.currentId;
		
		if (isToggleStateAction) {
			requestAnimationFrame(toggleDrawer);
		}

		if (isDrawerOpenAction) {
			setTimeout(() => closeButton.focus());
		}

		if (isChangeContentAction) {
			const titleText = (data[id] && data[id].title) || placeholderTitle;
			const noteText = (data[id] && data[id].note) || placeholderNote;
			title.textContent = titleText;
			note.textContent = noteText;
			state.currentId = id;
		}
	}

	update(props.id);

	function toggleDrawer() {
		drawer.classList.toggle('open');
		state.isOpen = !state.isOpen;
	}

	return update;
}