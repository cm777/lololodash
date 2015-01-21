'use strict';

var _ = require('lodash');

function size (items) {
	return _.forEach(items, function (item) {
		if (item.population >= 1)
			{item.size = 'big';}
		else if (item.population < 0.5)
			{item.size = 'small';}
		else
			{item.size = 'med';}

		return item;
	});
}

module.exports = size;
