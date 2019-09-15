'use strict';

function collectSameElements(collectionA, objectB) {
	var resultSameElements = [];

	for(var index of collectionA){
		if(objectB.value.includes(index.key)){
			resultSameElements.push(index.key);
		}
	}

	return resultSameElements;
}
