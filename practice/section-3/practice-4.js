'use strict';

function createUpdatedCollection(collectionA, objectB) {
  var collectionC = [];
  var newCollectionC = [];
  	for(var index in collectionA){
		var getInitialFind = collectionC.find(result => result.key == collectionA[index]);

		if(getInitialFind != undefined){
			getInitialFind.count = getInitialFind.count + 1;
		}
		else{
			if(collectionA[index].includes('-')){
				var splitValue = collectionA[index].split('-');
				collectionC.push({key: splitValue[0], count: parseInt(splitValue[1])});
			}else{
				collectionC.push({key: collectionA[index], count: 1});
			}
		}
	}
	for(var index of collectionC){
		if(objectB.value.includes(index.key)){
			index.count = index.count - Math.floor(index.count/3);
		}
		newCollectionC.push(index);
	}
	return newCollectionC;
}

