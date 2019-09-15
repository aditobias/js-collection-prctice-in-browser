'use strict';

function collectSameElements(collectionA, objectB) {
  var resultSameElements = [];

  	for(var index of collectionA){
  		if(objectB.value.includes(index)){
  			resultSameElements.push(index);
  		}
	}
	return resultSameElements;
}
