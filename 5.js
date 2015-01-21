'use strict';
var _ = require('lodash');

function countTheComments (comments){
	var results = [];

	//var grouped = _.groupBy(data, 'username');
	var grouped = _.groupBy(comments, function(item) {
		return item.username;
	});

	_.forEach(grouped, function (value, key) {
		var count = _.size(value);

		var result = {};
		result.username = key;
		result.comment_count = count;
		results.push(result);
	});

	var sorted = _.sortBy(results, function (user) {
		return user.comment_count;
	}).reverse();

	return sorted;
}

module.exports = countTheComments;
