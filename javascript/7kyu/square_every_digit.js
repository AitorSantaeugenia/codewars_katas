/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an intege
*/
function squareDigits(num) {
	let numbArray = num.toString();
	let result = [];

	for (let i = 0; i < numbArray.length; i++) {
		result[i] = numbArray[i] * numbArray[i];
	}
	return Number(result.join(''));
}

console.log(squareDigits(3212));
console.log(squareDigits(2112));
console.log(squareDigits(0));
//-------------------------------------------------------------------------------
//Other solutions
/* #1
function squareDigits(num){
  return Number(('' + num).split('').map(function (val) { return val * val;}).join(''));
  
}
*/
/* #2
function squareDigits(num){
  var array = num.toString().split('').map( function(int) {
    var i = parseInt(int);
    return i * i;
  });
  
  return parseInt(array.join(""));
}
*/
/* #3
function squareDigits(num){
  return +num.toString().split('').map(i => i*i).join('');
}
*/
