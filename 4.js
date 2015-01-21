'use strict';
var _ = require('lodash');

function analyze (deg) {
	return (deg > 19);
}

function weather (towns) {

	var result = {hot: [], warm: []};

	_.forEach(towns, function (town, name) {
		// console.log(arguments);

		if (_.every(town, analyze)) {
			result.hot.push(name);
		}

		else if (_.some(town, analyze)) {
			result.warm.push(name);
		}
	});

	return result;
}

module.exports = weather;
