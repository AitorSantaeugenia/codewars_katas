/* ### Exes and Ohs

Check to see if a string has the same amount of 'x's and 'o's. 
The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false
*/

function XO(str) {
	//code here
	let res = str.toLowerCase().split('');
	return res.filter((element) => element == 'x').length == res.filter((element) => element == 'o').length;
}

console.log(XO('xo')); // true
console.log(XO('xxOo')); // true
console.log(XO('xxxm')); // false
console.log(XO('Oo')); // false
console.log(XO('ooom')); // false

/* Other solutions
#1
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

#2
function XO(str) {
    return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

#3
function XO(str) {
    var a = str.replace(/x/gi, ''),
        b = str.replace(/o/gi, '');
    return a.length === b.length;
}

*/
