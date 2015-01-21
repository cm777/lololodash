var _ = require('lodash');

function sortItems (items) {
	return _.sortBy(items, function (item) {
		return item.quantity * -1;
	});
	// return _.sortBy(items, 'quantity').reverse();
}

module.exports = sortItems;
