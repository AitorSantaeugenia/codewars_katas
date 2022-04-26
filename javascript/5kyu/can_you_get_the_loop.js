/* ### Can you get the loop ?

You are given a node that is the beginning of a linked list. This list always contains a tail and a loop. Your objective is to determine the length of the loop.

For example in the following picture the tail's size is 3 and the loop size is 12:


// Use the `getNext' method or 'next' property to get the following node.
node.getNext()
node.next
Note: do NOT mutate the nodes!

Thanks to shadchnev, I broke all of the methods from the Hash class.

Don't miss dmitry's article in the discussion after you pass the Kata !! 

*/

function loop_size(node) {
	let nodes = [];

	while (node && nodes.indexOf(node) < 0) {
		nodes.push(node);
		node = node.next;
	}

	return nodes.length - Math.max(0, nodes.indexOf(node));
}

/* Other solutions
#1
function loop_size(node){
  var turtle = node;
  var rabbit = node;
  
  // Find a point in the loop.  Any point will do!
  // Since the rabbit moves faster than the turtle
  // and the kata guarantees a loop, the rabbit will
  // eventually catch up with the turtle.
  do {
    turtle = turtle.getNext();
    rabbit = rabbit.getNext().getNext();
  }
  while (turtle != rabbit);
  
  // The turtle and rabbit are now on the same node,
  // but we know that node is in a loop.  So now we
  // keep the turtle motionless and move the rabbit
  // until it finds the turtle again, counting the
  // nodes the rabbit visits in the mean time.
  var count = 0;
  do {
    ++count;
    rabbit = rabbit.getNext();
  }
  while (turtle != rabbit);

  // voila
  return count;
}

#2
function loop_size(node){
  var nodes = [], n = node;
  
  while (nodes.indexOf(n) === -1) {
    nodes.push(n);
    n = n.getNext();
  }
  
  return nodes.length - nodes.indexOf(n);
}

#3
function loop_size(node) {
  var map = new WeakMap(), i = 0;
  
  while (map.get(node) === void 0) {
    map.set(node, ++i);
    node = node.getNext();
  } 
  
  return i - map.get(node) + 1;
}

#4
function loop_size(node){
  var len = 2,
      current = node;
  while(true){
    for(var i = 1; i <= len; i++){
       node = node.getNext();
       if(node == current){
          return i;
       }
    }
    current = node;
    len *= 2;
  }
}

#5
const loop_size = node => {
  let visited = [];
  while (!visited.includes(node)) {
    visited.push(node);
    node = node.next;
  }
  let distance = visited.length - visited.indexOf(node)
  return distance;
}

*/
