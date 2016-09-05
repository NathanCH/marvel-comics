var webpackConfig = require('./webpack.config.js');

webpackConfig.entry = {};

var config = function(config) {
	config.set({
		browsers: ['Chrome'],
		singleRun: true,
		frameworks: ['mocha'],
		files: [
			'./src/**/*.spec.jsx'
		],
		preprocessors: {
			'./src/**/*.spec.jsx' : ['webpack']
		},
		webpack: webpackConfig,
		webpackServer: {
			noInfo: true
		}
	});
};

module.exports = config;