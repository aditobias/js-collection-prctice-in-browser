'use strict';

function collectSameElements(collectionA, collectionB) {
  var resultSameElements = [];

  for(var index of collectionA){
  	if (collectionB.includes(index)) {
  		resultSameElements.push(index);
  	}
  }
  return resultSameElements;
}
