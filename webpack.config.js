const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	mode: 'development',
	entry: path.resolve(__dirname, 'src', 'app.js'),
	output: {
		filename: '[name][contenthash].js',
		chunkFilename: '[name].bundle.js'
	},
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
			favicon: 'src/assets/favicon.ico',
			meta: {
				viewport: 'width=device-width, initial-scale=1'
			},
			// cache,
			// hash,
		})
	],

	optimization: {
		moduleIds: 'hashed',
		runtimeChunk: 'single'
		// splitChunks: {
		// 	name: true
		// }
	},

	devServer: {
		open: true
	}
}