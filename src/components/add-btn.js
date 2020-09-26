import { createElement } from 'utils/dom';

export default function create(parent = document.body, onClick) {
	const node = createElement('button', {
		id: 'add-counter',
		className: 'btn btn-float btn-round',
		textContent: '+'
	});

	parent.appendChild(node);
	node.addEventListener('click', onClick);
}