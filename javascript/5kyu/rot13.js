/* ### ROT13
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. 
ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters 
included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, 
like in the original Rot13 "implementation".
*/

function rot13(message) {
	//your code here
	//https://en.wikipedia.org/wiki/ROT13 -> copy original+cipher
	const original = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	const cipher = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
	return message.replace(/[a-z]/gi, (letter) => cipher[original.indexOf(letter)]);
}

console.log(rot13('test')); //"Input: test , Expected Output: grfg
console.log(rot13('Test')); //"Input: Test , Expected Output: Grfg

// Other results
/* #1
const rot13 = str => str.replace(/[a-z]/gi, letter => String.fromCharCode(letter.charCodeAt(0) + (letter.toLowerCase() <= 'm' ? 13: -13)));
*/

/* #2
function rot13(message) {
  var abc = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM';
  return message.replace(/[a-z]/gi, c => abc[abc.indexOf(c) + 13]);
}
*/

/* #3
function rot13(message){
  return message.replace(/[a-zA-Z]/g, function(c){
    var c13 = c.charCodeAt(0) + 13;
    var endCharCode = ( c > 'Z')? 122 : 90;
    return String.fromCharCode(  endCharCode < c13 ?  c.charCodeAt(0) - 13 : c13 );
  });
}
*/
