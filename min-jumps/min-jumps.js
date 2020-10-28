'use strict';

// Complete this algo
const minJumps = (arr, jumpCount = 1) => {
  if(arr[0] >= arr.length-1){
    return jumpCount;
  } else {
    let longestJump = arr[0] //initializes longest jump to first index
    let nextJump = 1 //index of next jump
    for(let index = 1; index <= arr[0]; index++){
      let jumpLength = index + arr[index]
      if(jumpLength > longestJump){
        longestJump = jumpLength;
        nextJump = index
      }
    }
    jumpCount++
    return minJumps(arr.slice(nextJump), jumpCount)
  }

};

//take first index in array
//look at all numbers you can jump to
//pick the one that gets you farthest, regardless of position

//value at index 0



//base case:
//sum >= array.length
//else recurse passing arr and jump count
  //if arr[0] > 0 decrease arr[0] by one and increase jumpcount and call jump
  //if arr[0]

module.exports = minJumps
