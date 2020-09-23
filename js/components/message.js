let initTitle = 'No active counters exist';
let initMessage = 'Add counters by clicking on the (+) button.';

const content = `
<h2 class="msg">${initTitle}</h2>
<p>${initMessage}</p>`;

// export default
const createMessage = function create(parent = document.body) {
	const node = document.createElement('div');
	node.className = 'message-box';
	node.innerHTML = content;
	parent.appendChild(node);

	// function update(title, message) {
	// 	if (title !== initTitle) {
	// 		const [titleDOM] = document.getElementsByTagName('h2');
	// 		titleDOM.textContent = title;
	// 		initTitle = title;
	// 	}

	// 	if (message !== initTitle) {
	// 		const [messageDOM] = document.getElementsByTagName('p');
	// 		messageDOM.textContent = message;
	// 		initMessage = message;
	// 	}
	// }

	function destroy() {
		node.remove();
	}

	return destroy;
}