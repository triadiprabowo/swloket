const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
		server: './server.ts'
	},
	mode: "production",
	target: 'node',
	resolve: { extensions: ['.ts', '.js'] },
	externals: [/(node_modules|main\..*\.js)/,],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: '[name].js'
	},
	module: {
		rules: [
			{ test: /\.ts$/, loader: 'ts-loader' }
		]
	},
	plugins: [
		new webpack.ContextReplacementPlugin(
			// fixes WARNING Critical dependency: the request of a dependency is an expression
			/(.+)?angular(\\|\/)core(.+)?/,
			path.join(__dirname, 'src'),
			{} // a map of your routes
		),
		new webpack.ContextReplacementPlugin(
			// fixes WARNING Critical dependency: the request of a dependency is an expression
			/(.+)?express(\\|\/)(.+)?/,
			path.join(__dirname, 'src'),
			{}
		)
	]
}
  