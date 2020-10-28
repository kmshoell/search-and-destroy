'use strict';

// Complete this algo
const minJumps = (arr, jumpCount=0) => {
  console.log('start of new minJumps', arr[0])
  if(arr[0] >= arr.length){
    jumpCount++;
    return jumpCount;
  } else {
    let longestJump = arr[0]
    let nextJump = 1
    for(let index = 1; index <= arr[0]; index++){
      let jumpLength = index + arr[1]
      if(jumpLength > longestJump){
        longestJump = jumpLength;
        nextJump = index
      }
      console.log('idx', index, 'length', jumpLength, 'long', longestJump, 'next', nextJump)
    }
    jumpCount++
    return minJumps(arr.slice(nextJump))
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
