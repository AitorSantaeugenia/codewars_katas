/* ### List Filtering

In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

Example
filter_list([1,2,'a','b']) == [1,2]
filter_list([1,'a','b',0,15]) == [1,0,15]
filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

*/

function filter_list(l) {
	// Return a new array with the strings filtered out
	return l.filter(Number.isFinite);
}

console.log(filter_list([ 1, 2, 'a', 'b' ])); //[1,2], 'For input [1,2,"a","b"]'
console.log(filter_list([ 1, 'a', 'b', 0, 15 ])); //[1,0,15], 'For input [1,"a","b",0,15]'
console.log(filter_list([ 1, 2, 'aasf', '1', '123', 123 ])); //[1,2,123], 'For input [1,2,"aasf","1","123",123]'

/* Other solutions
#1
function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}

#2
function filter_list(l) {
  return l.filter(e => Number.isInteger(e));
}

function filter_list(l) {
  return l.filter(Number.isInteger);
}

#3
function filter_list(l) {
  return l.filter( function(elem){return typeof elem != "string"} )
}

#4
function filter_list(l) {
  return l.filter(x => typeof(x) =="number");
}

*/
