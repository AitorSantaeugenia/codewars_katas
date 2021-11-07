/* THE HASH GENERATOR
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/
function generateHashtag(str) {
	if (str.trim() === '') {
		return false;
	}

	let hashtag = str.split(' ').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join('');

	return hashtag.length >= 140 ? false : '#' + hashtag;
}

console.log(generateHashtag('')); //false, "Expected an empty string to return false"
console.log(generateHashtag(' '.repeat(200))); //false, "Still an empty string"
console.log(generateHashtag('Do We have A Hashtag')); //#DoWeHaveAHashtag
console.log(generateHashtag('Codewars')); //#Codewars
console.log(generateHashtag('Codewars Is Nice')); //#CodewarsIsNice
console.log(
	generateHashtag(
		'Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat'
	)
); //false, "Should return false if the final word is longer than 140 chars."
// Also there is a test with exactly 140 characters, so >=, it was obvs btw
/*
Other solutions 
----------------------------------------------
#1
function generateHashtag (str) {
  return str.length > 140 || str === '' ? false :
    '#' + str.split(' ').map(capitalize).join('');
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
----------------------------------------------
function generateHashtag (str) {
   if(!str || str.length < 1) return false;
   
   var r = '#' + str.split(' ').map(function(el) {
     return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
   }).join('');
   return r.length > 140?false:r;
}
----------------------------------------------
function generateHashtag (str) {

  var hashtag = str.split(' ').reduce(function(tag, word) {
    return tag + word.charAt(0).toUpperCase() + word.substring(1);
  }, '#');
  
  return hashtag.length == 1 || hashtag.length > 140 ? false : hashtag;
}
----------------------------------------------
function generateHashtag(str) {
  var hashed = '#' + str.split(' ').map(function(v) {return v.charAt(0).toUpperCase() + v.slice(1);}).join('');
  return hashed.length > 140 || str == "" ? false : hashed;
}
----------------------------------------------
const generateHashtag = str => (s = '#'+str.trim().split(" ").filter(e=>e).map(e=>e[0].toUpperCase() + e.substring(1,e.length).toLowerCase()).join("")).length > 1 && s.length <= 140 ? s : false
----------------------------------------------
*/
