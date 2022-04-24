/* ### Number of trailing zeros of N!

Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Be careful 1000! has 2568 digits...

For more info, see: http://mathworld.wolfram.com/Factorial.html

Examples
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros
Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
*/

function zeros(n) {
	// your code here
	let zeros = 0;
	while (n > 0) {
		n = Math.floor(n / 5);
		zeros += n;
	}
	return zeros;
}

console.log(zeros(0)); //0, 'Testing with n = 0'
console.log(zeros(5)); //1, 'Testing with n = 5'
console.log(zeros(6)); //1, 'Testing with n = 6'
console.log(zeros(30)); //7, 'Testing with n = 30'

/* Other solutions
#1
function zeros(n) {
  return n/5 < 1 ? 0 : Math.floor(n/5) + zeros(n/5);
}

#2
function zeros (n) {
  var res = 0;
  for(var i=5; i<n; i*=5)
    res += Math.floor(n/i);
  return res;
}

#3
function zeros (n) {
  const kmax = Math.log(n)/Math.log(5); //Log2(n)/log2(5) = log5(n)
  let accum = 0;
  for (let k = 1; k <= kmax; k++) {
    accum += Math.floor(n/Math.pow(5,k));
  }
  return accum;
}

#4
function zeros(n){ //trailing zeroes of n!
   var countfives = 0,
       pow5 = 1,
       occurances;
   while(pow5 *= 5, occurances = Math.floor(n/pow5)) countfives += occurances;
   return countfives;
}

#5
function zeros (n) {
  n = ~~(n/5);
  return  n + (n<5 ? 0 : zeros(n));
}

#6
const zeros = n => n/5 < 1 ? 0 : Math.floor(n/5) + zeros(n/5);

*/
