/*
Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples
GetSum(1, 0) == 1   // 1 + 0 = 1
GetSum(1, 2) == 3   // 1 + 2 = 3
GetSum(0, 1) == 1   // 0 + 1 = 1
GetSum(1, 1) == 1   // 1 Since both are same
GetSum(-1, 0) == -1 // -1 + 0 = -1
GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2
*/
function getSum(a, b) {
	let min = Math.min(a, b);
	let max = Math.max(a, b);

	return (max - min + 1) * (min + max) / 2;
}

console.log(getSum(1, 0) == 1); // 1 + 0 = 1
console.log(getSum(1, 2) == 3); // 1 + 2 = 3
console.log(getSum(0, 1) == 1); // 0 + 1 = 1
console.log(getSum(1, 1) == 1); // 1 Since both are same
console.log(getSum(-1, 0) == -1); // -1 + 0 = -1
console.log(getSum(-1, 2) == 2); // -1 + 0 + 1 + 2 = 2

/*
function GetSum( a,b )
{
   if (a == b) return a;
   else if (a < b) return a + GetSum(a+1, b);
   else return a + GetSum(a-1,b);
}
*/

/*
function GetSum(a,b)
{
  return (Math.abs(a - b) + 1) * (a+b) / 2;
}
*/
