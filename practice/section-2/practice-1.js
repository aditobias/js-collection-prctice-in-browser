'use strict';

function countSameElements(collection) {
	var resultSameElements = [];

	for(var index in collection){
		var getInitialFind = resultSameElements.find(result => result.key == collection[index]);

		if(getInitialFind != undefined){
			getInitialFind.count = getInitialFind.count + 1;
		}
		else{
			resultSameElements.push({key: collection[index], count: 1});
		}
	}

	return resultSameElements;
}
