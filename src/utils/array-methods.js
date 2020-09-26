export function forEach(array, callback) {
	Array.prototype.forEach.call(array, callback);
}