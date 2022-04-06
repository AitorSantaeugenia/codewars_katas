/* ### Weight for weight
My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
For C: The result is freed.
*/
function orderWeight(strng) {
	// your code
	return strng
		.split(' ')
		.map((value) => {
			return {
				val: value,
				key: value.split('').reduce((acc, cur) => {
					return parseInt(acc) + parseInt(cur);
				}, 0)
			};
		})
		.sort((a, b) => {
			return a.key === b.key ? a.val.localeCompare(b.val) : a.key - b.key;
		})
		.map((el) => {
			return el.val;
		})
		.join(' ');
}

console.log(orderWeight('103 123 4444 99 2000')); //"2000 103 123 4444 99"
console.log(orderWeight('2000 10003 1234000 44444444 9999 11 11 22 123')); //"11 11 2000 10003 22 123 1234000 44444444 9999"
/* Other solutions
#1
function orderWeight(strng) {
 const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
  function comp(a,b){
    let sumA = sum(a);
    let sumB = sum(b);
    return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
   };
 return strng.split(' ').sort(comp).join(' ');
}

#2
function digitSum(str) {
  return str.split('').reduce(function(s, e) { 
    return s + parseInt(e); 
  }, 0);
}

function orderWeight(str) {
    return str.split(' ').sort(function(a, b) {
      return digitSum(a) - digitSum(b) || a.localeCompare(b);
    }).join(' ');
}

#3
function orderWeight(str) {
  const sum = x => x.split('').reduce((res, cur) => (res + +cur), 0);
  return str.split(' ').sort((a, b) => {
    const diff = sum(a) - sum(b);
    return diff == 0 ? (a > b ? 1 : -1) : diff;
  }).join(' ');
}

*/
