'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let resultUpdatedCollection = [];

  for(let index of collectionA){
  	if(objectB.value.includes(index.key)){
  		index.count = index.count - Math.floor(index.count/3);
  	}
  	resultUpdatedCollection.push(index);
  }
  return resultUpdatedCollection;
}
