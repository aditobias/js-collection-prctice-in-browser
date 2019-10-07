'use strict';

function createUpdatedCollection(collectionA, objectB) {
	var resultUpdatedCollection = [];

	for(let index of collectionA){
		if(objectB.value.includes(index.key)){
			index.count -= 1;
		}
	resultUpdatedCollection.push(index);
	}
	return resultUpdatedCollection;
}
