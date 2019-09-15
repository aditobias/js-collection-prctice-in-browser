'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var resultUpdatedCollection = [];

  for(var index of collectionA){
  	if(objectB.value.includes(index.key)){
  		index.count = index.count - Math.floor(index.count/3);
  	}
  	resultUpdatedCollection.push(index);
  }
  return resultUpdatedCollection;
}
