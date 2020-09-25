const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')


// * HTML-webpack-plugin
// o minification
// o lazy-loading
// o caching
// o prefetching
// o preloading 
// o hot-module-replacement

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'app.js'),
	// output: {
	// 	publicPath: '/dist',
	// },
	resolve: {
		modules: ['src', path.resolve(__dirname, 'src', 'js'), 'node_modules']
	},
	module: {
		rules: [
			{test: /\.css$/, use: ['style-loader', 'css-loader']}
		]
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html',
			title: 'Counter | Create counters ...',
			scriptLoading: 'defer',
			showErrors: true
			// favicon,
			// meta,
			// cache,
			// hash,
		})
	],

	devServer: {
		open: true
	}
}