//each doesnt return anything!!!!   

cosnt _ = {};
_.each = function(list, callback) {
	if (Array.isArray(list)) {
		for (var i = 0; i < list.length; i++) {
			callback(list[i], i, list);
		}
	} else {
		for (var key in list) {  //this is an object, not array
			callback(list[key], key, list)
		}
	}
}

_.each(['sally', 'georgie', 'porgie'], function(name, i, list) {
	if(list[i +1]) {
		console.log(name, 'is younger than', list[i + 1])
	} else {
		console.log(name, 'is the oldest')
	}
})

/// map returns an array everytime !!!!

_.map([1,2,3], function(v,i,list) {console.log(v)})  //(element, index, list)

const weapons = ['candlestick', 'pipe']

const makeBroken = function(item) {
	return `broken ${item}`;
};

const brokenWeapons = _.map(weapons, makeBroken)

_.map = function(list,callback) {
	var storage = [];

	for (var i = 0; i <list.length; i++) {
		storage.push(callback(list[i], i, list));
	}
	return storage;
}

-.map([1,2,3], function(val) {return val +1;})  /// [2,3,4]


/// filter only returns the items that match, it returns these to a new array