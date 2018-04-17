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

/// map returns an array everytime !!!! /// map will return array the same
//size as the original

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

function CreateSuspectsObjects(name) {
	return {
		name: name,
		color: name.split(' ')[1],
		speak() {  //ES6 feature calling function inside object
			console.log('my name is ', name);

		}
	};
};

var suspects =['Miss Scarlet', 'Colonel Mustard'];

var suspectsList = [];

for(var i=0; i < suspects.length; i++) {
	suspect = CreateSuspectsObjects(suspects[i]) suspects.push(suspect);
	//or combine above line
	suspectsList.push(CreateSuspectsObjects(suspects[i]));
}

_.each(suspects, function(name) {   // _.each takes to arguments (list, and function to run onlist)
	let suspectsObj = CreateSuspectsObjects(name);
	suspectsList.push(suspectsObj);
	//or combine to 1 line
	suspectsList.push(CreateSuspectsObjects(name));
});

_.each = function(list, callback) {
	
}

////filter

const _ = {};

_.filter = function (arr,cb) {
	const storage = [];
//or use each
	_.each(arr, function(val, i, list) {
		if (cb(item, i, list) === true) {  // or if (cb(item, i, list)) storage.push(item);
			storage.push(item);
		}
	});

	// for (let i = 0; i < arr.length; i++) {
	// 	if(cb(arr[i], i, arr) === true) {
	// 		storage.push(arr[i]); 
	// 	}
	// }
	return storage;
}

const videoData = [];

_.filter(videoData, function(suspectObject) {
	return suspectObject.present; /// present is a key true or falst
})

