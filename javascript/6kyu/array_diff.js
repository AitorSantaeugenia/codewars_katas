// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]
function arrayDiff(a, b) {
	return a.filter((word) => b.indexOf(word) === -1);
}

console.log(arrayDiff([], [ 4, 5 ])); // [] "a was [], b was [4,5]"
console.log(arrayDiff([ 3, 4 ], [ 3 ])); // [4], "a was [3,4], b was [3]"
console.log(arrayDiff([ 1, 8, 2 ], [])); // [1,8,2], "a was [1,8,2], b was []"
console.log(arrayDiff([ 1, 2, 3 ], [ 1, 2 ])); // [3], "a was [1,2,3], b was [1,2]"

/* Other solutions
-----------------------------
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}
-----------------------------
function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}
-----------------------------
function array_diff(a, b) {
  b = new Set(b)
  return a.filter(v => !b.has(v))
}
-----------------------------
function array_diff(a, b) {
  return a.filter(function (v) { return b.indexOf(v) === -1 });
}
-----------------------------
function array_diff(a, b) {

    var arr = new Array();
    
    for(var i = 0;i<a.length;i++){
        if(b.indexOf(a[i])<0){
            arr.push(a[i]);
        }
    }
  
    return arr;
}
-----------------------------
array_diff = require("lodash").difference;
-----------------------------
function array_diff(a, b) {
  return a.filter(x=>b.indexOf(x));
}

*/
