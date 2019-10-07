'use strict';


function countSameElements(collection) {
  let resultSameElements = [];

    for(let index in collection){
      let getInitialFind = resultSameElements.find(result => result.name === collection[index]);

        if(getInitialFind !== undefined){
          getInitialFind.summary = getInitialFind.summary + 1;
      }
		else{
			if(collection[index].includes('-')){
        let splitValue = collection[index].split('-');
        let getSplitValueFind = resultSameElements.find(result => result.name === splitValue[0]);

				if(getSplitValueFind !== undefined){
					getSplitValueFind.summary = getSplitValueFind.summary + parseInt(splitValue[1]);
				}
				else{
					resultSameElements.push({name: splitValue[0], summary: parseInt(splitValue[1])});
				}
			}
			else if (checkIfHasBraceOrSemiColon(collection, index)){
				if(collection[index].includes(':')){
          let splitValue = collection[index].split(':');
					resultSameElements.push({
            name: splitValue[0],
            summary: parseInt(splitValue[1])
					});
				}else if(collection[index].includes('[')){
					let getInitialName = collection[index].split('[');
          let getInitialValue = collection[index].substring(collection[index].indexOf('[')+1, collection[index].indexOf(']'));
          let getBraceValueFind = resultSameElements.find(result => result.name === getInitialName[0]);
					
					if(getBraceValueFind !== undefined){
						getBraceValueFind.summary = getBraceValueFind.summary + parseInt(getInitialValue);
					}
					else{
						resultSameElements.push({name: getInitialName[0], summary: parseInt(getInitialValue)});
					}
				}
			}
			else{
				resultSameElements.push({
            name: collection[index],
            summary: 1
				  });
			}
		}
	}
	return resultSameElements;
}

function checkIfHasBraceOrSemiColon(collection, index) {
  return collection[index].includes(':') || collection[index].includes('[');
}

