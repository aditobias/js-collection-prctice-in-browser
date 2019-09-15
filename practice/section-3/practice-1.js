'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var resultUpdatedCollection = [];

	for(var index of collectionA){
		if(objectB.value.includes(index.key)){
			index.count = index.count - 1;
		}
	resultUpdatedCollection.push(index);
	}
	return resultUpdatedCollection;
}
