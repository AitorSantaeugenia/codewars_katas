/*
Acknowledgments:
I thank yvonne-liu for the idea and for the example tests :)

Description:
Encrypt this!

You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

Your message is a string containing space separated words.
You need to encrypt each word in the message using the following rules:
The first letter must be converted to its ASCII code.
The second letter must be switched with the last letter
Keepin' it simple: There are no special characters in the input.
Examples:
encryptThis("Hello") === "72olle"
encryptThis("good") === "103doo"
encryptThis("hello world") === "104olle 119drlo"
*/

function encryptThis(text) {
	let splitArr = text.split(' ');
	let result = [];

	splitArr.forEach((str) => {
		if (str.length === 1) {
			result.push(str.charCodeAt(0));
		} else {
			let mappedStr = str.split('');
			mappedStr[0] = str.charCodeAt(0);
			mappedStr[1] = str[str.length - 1];
			mappedStr[str.length - 1] = str[1];
			result.push(mappedStr.join(''));
		}
	});

	return result.join(' ');
}

console.log(encryptThis('A')); //"65"
console.log(encryptThis('A wise old owl lived in an oak')); // "65 119esi 111dl 111lw 108dvei 105n 97n 111ka"
console.log(encryptThis('The more he saw the less he spoke')); // "84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp"
console.log(encryptThis('The less he spoke the more he heard')); //"84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare"
console.log(encryptThis('Why can we not all be like that wise old bird')); //"87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri"
console.log(encryptThis('Thank you Piotr for all your help')); //"84kanh 121uo 80roti 102ro 97ll 121ruo 104ple"
console.log(encryptThis('Hello')); //"72olle"
console.log(encryptThis('good')); //"103doo"
console.log(encryptThis('hello world')); //"104olle 119drlo"
/*
  the second and the last letter is switched (e.g. Hello becomes Holle)
  the first letter is replaced by its character code (e.g. H becomes 72)
  Note: there are no special characters used, only letters and spaces
  */

// Other solutions
/* #1
const encryptThis = text => text
  .split(' ')
  .map(word => word
  .replace(/(^\w)(\w)(\w*)(\w$)/, `$1$4$3$2`)
  .replace(/^\w/, word.charCodeAt(0)))
  .join(' ');
*/
/* #2
const encryptThis = text =>
  text.replace(/\b\w(\w?)(\w*?)(\w?)\b/g, (word, a, mid, b) => 
    word.charCodeAt(0) + b + mid + a);
*/
/* #3
const encryptWord = w => {
  const first = w.charCodeAt(0);
  let res;
  switch (w.length) {
    case 0: return '';
    case 1: return first;
    case 2: res = [first, w[1]]; break;
    case 3: res = [first, w[2], w[1]]; break;
    default: res = [first, w.slice(-1), w.slice(2,-1), w[1]]; break;
  }
  return res.join('');
};

const encryptThis = text => text.split(' ').map(encryptWord).join(' ');
*/
