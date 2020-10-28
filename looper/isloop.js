'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let node = linkedlist.head
  let values = {}
  while(node.next){
    if(values[node.value]){
      return true;
    } else {
      values[node.value] =  true
      node = node.next;
    }
  }
  return false;

};


//intialize a empty object
//call next node
//compare value of node to obj
//if current node.value is in the obj return loop
//else input node.vaule into obj and go to next node
//if you make it to the end of the loop return no loop



//check to see if tail.next is null


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
