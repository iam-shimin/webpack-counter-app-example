import { createElement } from 'utils/dom';

const content = `
<span id="score">{number}</span>
<i> Total Counts</i>
`

export default function create(parent = document.body) {
	const node = createElement('div', {
		id: 'total',
		innerHTML: content
	});
	parent.appendChild(node);

	const [score] = node.getElementsByTagName('span');

	function update(total) {
		score.textContent = total || 0;
	}

	return update;
}