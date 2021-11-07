// MOVING ZEROS TO THE END
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

var moveZeros = function(arr) {
	// TODO: Program me
	let final = [];
	let zeros = [];

	arr.map((value) => {
		return value === 0 ? zeros.push(0) : final.push(value);
	});

	return final.concat(zeros);
};

console.log(moveZeros([ 1, 2, 0, 1, 0, 1, 0, 3, 0, 1 ])); // 1, 2, 1, 1, 3, 1, 0, 0, 0, 0

/*
Other Solutions
--------------------------
#1
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
--------------------------
var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num){return num !== 0;});
  var zeroList = arr.filter(function (num){return num === 0;});
  return filtedList.concat(zeroList);
}
--------------------------
var moveZeros = function (arr) {
  return arr
    .filter((val) => val !== 0)
    .concat(arr.filter((val) => val === 0));
}
--------------------------
var moveZeros = function (arr) {
  let result = arr.filter(c => c !== 0)
  let count = arr.length - result.length
  
  return result.concat(Array(count).fill(0))
}
--------------------------
var moveZeros = function (arr) {
  return [
    ...(arr.filter(n => n !== 0)),
    ...(arr.filter(n => n === 0))
  ];
}
--------------------------
*/
