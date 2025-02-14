'use strict';

function countSameElements(collection) {
  let resultSameElements = [];

	for(let index in collection){
    let getInitialFind = resultSameElements.find(result => result.key === collection[index]);

		if(getInitialFind !== undefined){
			getInitialFind.count = getInitialFind.count + 1;
		}else{
			if(collection[index].includes('-')){
				var splitValue = collection[index].split('-');
				resultSameElements.push({key: splitValue[0], count: parseInt(splitValue[1])});
			}
			else{
				resultSameElements.push({key: collection[index], count: 1});
			}
		}
	}

	return resultSameElements;
}
