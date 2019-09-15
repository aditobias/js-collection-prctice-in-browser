'use strict';

function countSameElements(collection) {
   	var resultSameElements = [];

	for(var index in collection){
		var getInitialFind = resultSameElements.find(result => result.name == collection[index]);

		if(getInitialFind != undefined){
			getInitialFind.summary = getInitialFind.summary + 1;
		}
		else{
			if(collection[index].includes('-')){
				var splitValue = collection[index].split('-');
				var getSplitValueFind = resultSameElements.find(result => result.name == splitValue[0]);
				if(getSplitValueFind != undefined){
					getSplitValueFind.summary = getSplitValueFind.summary + parseInt(splitValue[1]);
				}
				else{
					resultSameElements.push({name: splitValue[0], summary: parseInt(splitValue[1])});
				}
			}
			else if (collection[index].includes(':') || collection[index].includes('[')){
				if(collection[index].includes(':')){
					var splitValue = collection[index].split(':');
					resultSameElements.push({name: splitValue[0], summary: parseInt(splitValue[1])});
				}else if(collection[index].includes('[')){
					var getInitialName = collection[index].split('[');
					var getInitialValue = collection[index].substring(collection[index].indexOf('[')+1, collection[index].indexOf(']'));
					var getBraceValueFind = resultSameElements.find(result => result.name == getInitialName[0]);
					
					if(getBraceValueFind != undefined){
						getBraceValueFind.summary = getBraceValueFind.summary + parseInt(getInitialValue);
					}
					else{
						resultSameElements.push({name: getInitialName[0], summary: parseInt(getInitialValue)});
					}
				}
			}
			else{
				resultSameElements.push({name: collection[index], summary: 1});
			}
		}
	}
	return resultSameElements;
}
