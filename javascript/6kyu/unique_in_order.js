/* Unique in order
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/
var uniqueInOrder = function(iterable) {
	//your code here - remember iterable can be a string or an array
	let arr = Array.isArray(iterable) ? iterable : iterable.split('');
	let unique = arr.filter((letter, i) => {
		return arr[i] != arr[i + 1];
	});

	return unique;
};

console.log(uniqueInOrder('AAAABBBCCDAABBB')); // ['A','B','C','D','A','B']
console.log(uniqueInOrder('ABBCcAD')); // ['A', 'B', 'C', 'c', 'A', 'D']
console.log(uniqueInOrder([ 1, 2, 2, 3, 3 ])); //[1,2,3]

/* Other Solutions
----------------------------------
function uniqueInOrder(it) {
  var result = []
  var last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  
  return result
}
----------------------------------
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}
----------------------------------
var uniqueInOrder = function (iterable)
{
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}
----------------------------------
var uniqueInOrder=function(iterable){
  var res = [];
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i] != iterable[i+1]) res.push(iterable[i]);
  }
  return res;
}
----------------------------------
var uniqueInOrder=function(iterable){
  var result = [];
  for (var i = 0; i < iterable.length; i++) {
    if (iterable[i-1] === undefined || iterable[i-1] !== iterable[i]) {
      result.push(iterable[i]);
    }
  }
  return result;
}
----------------------------------
const uniqueInOrder = d => [...d].filter((x, i, a) => x != a[i + 1])
----------------------------------
var uniqueInOrder=function(iterable){
  return Array.prototype.filter.call(iterable, function(current, index){ return iterable[index - 1] !== current})
}
----------------------------------
*/
