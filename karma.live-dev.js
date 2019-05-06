const merge = require('webpack-merge');
const common = require('./karma.common.js');

module.exports = function(config) {
	config.set(merge(common, {
		logLevel : config.LOG_INFO,
		browsers : [ 'Firefox', 'Chrome', 'ChromeHeadless', 'Safari', 'PhantomJS' ],
		autoWatch : true,
		singleRun : false,
		concurrency : Infinity
	}))
}
