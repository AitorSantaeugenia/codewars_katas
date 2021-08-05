/*
Your task is to make a function that can take any non-negative integer as an argument and return it
with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321
*/

function highAndLow(numbers) {
	let nums = numbers.split(' ');
	return `${Math.max(...nums)} ${Math.min(...nums)}`;
}
console.log(highAndLow('1 2 3 4 5')); // return "5 1"
console.log(highAndLow('1 2 -3 4 5')); // return "5 -3"
console.log(highAndLow('1 9 3 4 -5')); // return "9 -5"

/*
function highAndLow(numbers) {
  numbers = numbers.split(' ').map(Number)
  
  var min = Math.min.apply(null, numbers)
  var max = Math.max.apply(null, numbers)
  
  return max + ' ' + min
}
*/
