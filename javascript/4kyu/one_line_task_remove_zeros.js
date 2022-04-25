/* ### One Line Task: Remove Zeros

Task
You are given an integer array a that contains only digits 0-9. Remove all zeros from the start and end of a.

It is guaranteed that array a has at least two non-zero elements.

Code Limit
Less than 53 characters.

Example
For a = [0, 9, 0, 4],

the output should be [9, 0, 4].

For a = [0, 9, 5, 0, 0, 0, 0, 2, 0, 0],

the output should be [9, 5, 0, 0, 0, 0, 2].

For a = [1, 6, 0, 2],

the output should be [1, 6, 0, 2].
*/

// First try, not passed the test (53 max characters, my solution was 55)
removeZeros = (a) => (f = (a) => a.reverse().filter((x) => (a |= x)))(f(a));

console.log(removeZeros([ 0, 9, 0, 4 ])); //[9, 0, 4]);
console.log(removeZeros([ 0, 9, 5, 0, 0, 0, 0, 2, 0, 0 ])); // [9, 5, 0, 0, 0, 0, 2]);
console.log(removeZeros([ 1, 6, 0, 2 ])); // [1, 6, 0, 2]);
console.log(removeZeros([ 1, 0, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ])); //[1, 0, 2, 3]);

/* Other solutions
#1
removeZeros=a=>eval(`[${/[^0,].*[^0,]/.exec(a)}]`)

#2
removeZeros=a=>eval(`[${/[1-9].+[1-9]/.exec(a)}]`)

#3
removeZeros=x=>eval(`[${/[1-9].+[1-9]/.exec(x)}]`)

*/
