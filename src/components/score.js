const content = `
<span id="score">{number}</span>
<i> Total Counts</i>
`

export default function create(parent = document.body) {
	const node = document.createElement('div');
	node.id = 'total';
	node.innerHTML = content;
	parent.appendChild(node);

	const [score] = node.getElementsByTagName('span');

	function update(total) {
		score.textContent = total || 0;
	}

	return update;
}