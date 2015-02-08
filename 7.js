var _ = require('lodash');

var worker = function(input) {

	input = _.sortBy(input, 'income');

	var sum = _.reduce(input, function(sum, n) {
		return sum + n.income;
	}, 0);

	var avg = sum / input.length;

	var result = {};
	result.average = avg;
	result.underperform = _.filter(input, function (n) {return n.income <= avg;});
	result.overperform = _.filter(input, function (n) {return n.income > avg;});
	return result;
};

module.exports = worker;
