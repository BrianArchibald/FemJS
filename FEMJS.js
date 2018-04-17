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

const suspects = _.filter(videoData, function(suspectObject) {
	return suspectObject.present; /// present is a key true or falst
})

const suspectsName = .map( suspects, suspect => {
	return suspect.name; // return just the name of our filtered above
})



///// arrow functions 

// if only 1 param it doesnt need to be wrapped in parens
// if 1 line it doesnt need to be wrapped in curlys
// the this value is from the parent scope, no this value on the arrow func	



/// Template strings //
//add var names wrapped in curlys

var nameImprover = (name, adj) => {
	return `Col ${name} Mc ${adj} pants`;
};

var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."



const createTuple = (a,b,c,d) => {
	return [[a,c],[b,d]];
}
createTuple('It', 'be','could','anyone','no one');   // no one was not picked up
//  



// Spread operator

const createTuple = (a,b,c, ...d) => {
	return [[a,c],[b,d]];
}
createTuple('It', 'be','could','anyone','no one');

//  [['It', 'could'], ['be', ['anyone, 'no one']]] 



/// Arguments keyword ////// use when we dont know how many args we will get

const createTuple = (a,b,c,d) => {
	console.log(arguments);  //  undefined with arrow  with function keyword it will be 
	return [[a,c],[b,d]];    // it be could anyone no one
}
createTuple('It', 'be','could','anyone','no one');


//// Default params  //////

const add = function (a, b = 2) {
	console.log(arguments); // logs [3]
	return a + b;
};
add(3); // 5



// Array like objects   /// and array.from ES6 feature

const constructArr = function () {
	const arr = Array.prototype.slice.call(arguments); // this takes a array like object and 
				Array.from(arguments) ///ES6 new 						//turns it into an array
	return arr.join(' ');
};
constructArr('was', 'it', 'in');









