'use strict';

function createUpdatedCollection(collectionA, objectB) {
  let collectionC = [];
  let newCollectionC = [];
    for(let index in collectionA){
		  let getInitialFind = collectionC.find(result => result.key === collectionA[index]);

		if(getInitialFind !== undefined){
			getInitialFind.count = getInitialFind.count + 1;
		}
		else{
			collectionC.push(
			  {
          key: collectionA[index],
          count: 1
			  });
		}
	}
	for(let index of collectionC){
		if(objectB.value.includes(index.key)){
			index.count = index.count - Math.floor(index.count/3);
		}
		newCollectionC.push(index);
	}
	return newCollectionC;
}
