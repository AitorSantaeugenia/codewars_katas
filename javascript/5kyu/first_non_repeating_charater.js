/* ### First non-repeating character
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.

For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/
function firstNonRepeatingLetter(s) {
	// Add your code here
	let newString = s.toLowerCase();

	for (let i = 0; i < s.length; i++) {
		if (newString.indexOf(newString.charAt(i)) == newString.lastIndexOf(newString.charAt(i))) {
			return s.charAt(i);
		}
	}
	return '';
}

console.log(firstNonRepeatingLetter('a')); //a
console.log(firstNonRepeatingLetter('stress')); //t
console.log(firstNonRepeatingLetter('moonmen')); //e
console.log(firstNonRepeatingLetter('')); //""
console.log(firstNonRepeatingLetter('sTress')); //T
console.log(firstNonRepeatingLetter('sTreSS')); //T

/* Other solutions
#1
function firstNonRepeatingLetter(s) {
  for(var i in s) {
    if(s.match(new RegExp(s[i],"gi")).length === 1) {
      return s[i];
    }
  }
  return '';
}

#2
function firstNonRepeatingLetter(s) {
  var t=s.toLowerCase();
  for (var x=0;x<t.length;x++)
    if(t.indexOf(t[x]) === t.lastIndexOf(t[x]))
      return s[x];
  return "";
}

#3
function firstNonRepeatingLetter(s) {
  let str = s.toLowerCase();
  for(let i = 0; i < str.length; i++) {
    if(str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
      return s[i];
    }
  }
  return "";
}

#4
function firstNonRepeatingLetter(str){
  return str.split('').find(e => str.match(new RegExp(`${e}`, 'gi')).length === 1) || ''
}

*/
