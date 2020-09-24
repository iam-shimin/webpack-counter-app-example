const path = require('path');

// caching
// hot-module-replacement
// lazy-loading
// prefetching
// preloading 

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'js', 'app.js'),
	output: {
		publicPath: '/dist'
	},
	resolve: {
		modules: ['src', path.resolve(__dirname, 'src', 'js'), 'node_modules']
	}
}