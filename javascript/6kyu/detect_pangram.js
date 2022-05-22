// ### Detect Pangram

// A pangram is a sentence that contains every single letter of the alphabet at least once.
// For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because
// it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string) {
	//...
	const alphabet = 'abcdefghijklmnopqrstuvwxyz';
	const str = string.toLowerCase();

	for (let i = 0; i < alphabet.length - 1; i++) {
		if (str.indexOf(alphabet[i]) === -1) {
			return false;
		}
	}

	return true;
}

var string = 'The quick brown fox jumps over the lazy dog.';
console.log(isPangram(string));
var string2 = 'This is not a pangram.';
console.log(isPangram(string2));

/* Other solutions
-----------------------------
function isPangram(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}
-----------------------------
function isPangram(string){
  return 'abcdefghijklmnopqrstuvwxyz'
    .split('')
    .every((x) => string.toLowerCase().includes(x));
}
-----------------------------
function isPangram(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}
-----------------------------
function isPangram(string) {
  const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];

  return alphabetList.every((letter) => string.toLowerCase().includes(letter));
}
-----------------------------
function isPangram(str) {
    var s = str.toLowerCase();
    var letters = "zqxjkvbpygfwmucldrhsnioate";
    for (var i = 0; i < 26; i++)
        if (s.indexOf(letters.charAt(i)) == -1)
            return false;
    return true;
}
-----------------------------
function isPangram(string) {
  return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}
-----------------------------
function isPangram(str){
 var alphabet = ['a', 'b', 'c', 'd', 'e',
        'f', 'g', 'h', 'i', 'j',
        'l', 'm', 'n', 'o', 'p',
        'q', 'r', 's', 't', 'u',
        'v', 'w', 'x', 'y', 'z'
      ];
      str=str.toLowerCase();
      for (var i = 0; i < alphabet.length; i++) {
          if (str.indexOf(alphabet[i])<0) {
            return false;
          }
      }
      return true
}
*/
