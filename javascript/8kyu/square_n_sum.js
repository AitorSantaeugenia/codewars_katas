/*
### Square(n) Sum
##  Complete the square sum function so that it squares each number passed into it and then sums the results together.
    For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
*/

function squareSum(numbers) {
	let e = 0;
	for (let i = 0; i < numbers.length; i++) {
		e += numbers[i] * numbers[i];
	}
	return e;
}
console.log(squareSum([ 1, 2 ])); //5
console.log(squareSum([ 0, 3, 4, 5 ])); //50
console.log(squareSum([])); //0

// Other Solutions
/*
#1
function squareSum(numbers){
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}

#2
 function squareSum(numbers){
  return numbers.map(square).reduce(sum);
}

function square(number) {
  return number * number;
}

function sum(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

#3
function squareSum(numbers){
  return numbers.reduce((sum,num) => sum + (num * num), 0);
}
  */
