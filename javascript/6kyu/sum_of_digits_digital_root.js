// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

// Examples
//     16  -->  1 + 6 = 7
//    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
// 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
// 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
	// ...
	let result = 0;

	String(n).split('').map((num) => {
		result += Number(num);
	});
	return result < 10 ? result : digital_root(result);
}
console.log(digital_root(16)); //7
console.log(digital_root(456)); //6

/* Other solutions
---------------------------
function digital_root(n) {
  return (n - 1) % 9 + 1;
}
---------------------------
function digital_root(n) {
  if (n < 10) return n;
  
  return digital_root(
    n.toString().split('').reduce(function(acc, d) { return acc + +d; }, 0));
}
---------------------------
function digital_root(n) {
  if (n < 10)
    return n;

  for (var sum = 0, i = 0, n = String(n); i < n.length; i++)
    sum += Number(n[i]);
   
  return digital_root(sum);
}
---------------------------
function digital_root(n){
    n = eval(n.toString().split('').join('+'));

    if (n > 9) {
        return digital_root(n);
    }

    return n;
}
---------------------------
function digital_root(n) {
  if (n < 10) return n
  return digital_root(n % 10 + digital_root(Math.floor(n / 10)))
}
---------------------------
function digital_root(n) {
  return--n%9+1;
}
---------------------------
function digital_root(n) {
  // ...
  var output = []
  var s_number = n.toString();

for (var i = 0, len = s_number.length; i < len; i += 1) {
    output.push(+s_number.charAt(i));
}
  if (output.length === 1) {
    return output[0]
  }

  for (var i = 0, sum = 0; i < output.length; sum += output[i++]);
  

  return digital_root(sum)
}
---------------------------
*/
