/*
### Snail Sort
## Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
# For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

#* NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

#* NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/
snail = function(array) {
	// enjoy
	let solutionArr = [];
	while (array.length) {
		solutionArr.push(...array.shift());
		for (let i = 0; i < array.length; i++) {
			solutionArr.push(array[i].pop());
		}
		solutionArr.push(...(array.pop() || []).reverse());
		for (let i = array.length - 1; i >= 0; i--) {
			solutionArr.push(array[i].shift());
		}
	}
	return solutionArr;
};

console.log(snail([ [] ])); // []
console.log(snail([ [ 1 ] ])); // [ 1 ]
console.log(snail([ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ])); // [1, 2, 3, 6, 9, 8, 7, 4, 5]
console.log(
	snail([
		[ 1, 2, 3, 4, 5 ],
		[ 6, 7, 8, 9, 10 ],
		[ 11, 12, 13, 14, 15 ],
		[ 16, 17, 18, 19, 20 ],
		[ 21, 22, 23, 24, 25 ]
	])
); // [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
console.log(
	snail([
		[ 1, 2, 3, 4, 5, 6 ],
		[ 20, 21, 22, 23, 24, 7 ],
		[ 19, 32, 33, 34, 25, 8 ],
		[ 18, 31, 36, 35, 26, 9 ],
		[ 17, 30, 29, 28, 27, 10 ],
		[ 16, 15, 14, 13, 12, 11 ]
	])
); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
//----------------------------------------------------------------
/* ### Other solutions
#1
function snail(array) {
  var vector = [];
  while (array.length) {
    vector.push(...array.shift());
    array.map(row => vector.push(row.pop()));
    array.reverse().map(row => row.reverse());
  }
  return vector;
}

#2
snail = function(array) {
  var size = array.length;
  
  if (size == 0)
    return [];

  if (size == 1)
    return array[0];
  
  var top    = array[0].slice(0, -1);
  var right  = array.slice(0, -1).map(a => a[size - 1]);
  var bottom = array[size -1].slice(1).reverse();
  var left   = array.slice(1).map(a => a[0]).reverse();
  var inner  = array.slice(1, -1).map(a => a.slice(1, -1));

  return [].concat(top, right, bottom, left, snail(inner));
}

#3
const snail = function(array) {
  const list = [];

  while(array.length) {
    list.push(...array.shift(), ...array.map(row => row.pop()));
    
     array.reverse().map(row => row.reverse());
  }

  return list;
}
*/
