'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let index = Math.floor(array.length/2);
	let idxValue = array[index];
	if( target === idxValue){
		return true;
	} else if (target < idxValue){
		return binarySearch(array.slice(0,index), target)
	} else if (target > idxValue){
		return binarySearch(array.slice(index + 1), target);
	} else {
		return false
	}
};


//input sorted array and target value
//pick midpoint of arr and compare to value
//if midpoint equals value return true
//else if midpoint < value call search function again
//else if midpoint > slice array and recurse

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
