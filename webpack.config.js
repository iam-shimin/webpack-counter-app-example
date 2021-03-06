const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'app.js'),
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
			showErrors: true,
			// favicon,
			meta: {
				viewport: 'width=device-width, initial-scale=1'
			},
			// cache,
			// hash,
		})
	],

	devServer: {
		open: true
	}
}