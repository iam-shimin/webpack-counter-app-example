export function createElement(type, attrs) {
	const node = document.createElement(type || 'div');

	Object.keys(attrs).forEach(key => {
		node[key] = attrs[key];
	});

	return node;
}