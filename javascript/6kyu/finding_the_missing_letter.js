/*
#Find the missing letter

Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

You will always get an valid array. And it will be always exactly one letter be missing. 
The length of the array will always be at least 2.
The array will always contain letters in only one case.

Example:

['a','b','c','d','f'] -> 'e' ['O','Q','R','S'] -> 'P'

["a","b","c","d","f"] -> "e"
["O","Q","R","S"] -> "P"```
(Use the English alphabet with 26 letters!)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have also created other katas. Take a look if you enjoyed this kata!
*/

function findMissingLetter(array) {
	const letters = [
		'a',
		'b',
		'c',
		'd',
		'e',
		'f',
		'g',
		'h',
		'i',
		'j',
		'k',
		'l',
		'm',
		'n',
		'o',
		'p',
		'q',
		'r',
		's',
		't',
		'u',
		'v',
		'w',
		'x',
		'y',
		'z'
	];
	for (let i = 0; i < array.length; i++) {
		//Find the match
		let match = letters.indexOf(array[i].toLowerCase());
		//console.log(match)

		//if match +1 is different, return
		if (array[0] === array[0].toUpperCase()) {
			if (letters[match + 1].toUpperCase() !== array[i + 1]) {
				return letters[match + 1].toUpperCase();
			}
		} else if (array[0] === array[0].toLowerCase()) {
			if (letters[match + 1] !== array[i + 1]) {
				return letters[match + 1].toLowerCase();
			}
		}
	}
}

console.log(findMissingLetter([ 'a', 'b', 'c', 'd', 'f' ]));
console.log(findMissingLetter([ 'O', 'Q', 'R', 'S' ]));
//random test errors to solve
console.log(findMissingLetter([ 'e', 'f', 'h' ]));
console.log(findMissingLetter([ 'F', 'G', 'H', 'I', 'K', 'L', 'M' ]));

// Other solutions from other people
/* #1 -------------------------------
function findMissingLetter(array) {
  let first = array[0].charCodeAt(0)
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i)
    }
  }
  throw new Error("Invalid input")
}
*/
/* #2 -------------------------------
function findMissingLetter(array)
{
   var i=array[0].charCodeAt();
   array.map(x=>  x.charCodeAt()==i?i++:i);
   return String.fromCharCode(i);
}
*/
/* #3 -------------------------------
const findMissingLetter = (array) => {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const start = alphabet.indexOf(array[0]);
  return alphabet.slice(start, start + array.length).find(el => !array.includes(el));
};
*/
