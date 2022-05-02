/* ### Jaden Casing Strings

Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and 
After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. 
When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, 
you'll have to capitalize each word, check out how contractions are expected to be in the example below.

Your task is to convert strings to how they would be written by Jaden Smith. The strings are 
actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

Example:

Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"
Link to Jaden's former Twitter account @officialjaden via archive.org
*/

String.prototype.toJadenCase = function() {
	//...
	let jadenString = '';

	this.split(' ').forEach(function(letter) {
		jadenString = jadenString + ' ' + letter.substring(0, 1).toUpperCase() + letter.substring(1);
	});

	return jadenString.substring(1);
};

var str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase()); //"How Can Mirrors Be Real If Our Eyes Aren't Real"

/* Other solutions
#1
String.prototype.toJadenCase = function () { 
  return this.split(" ").map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
}

#2
String.prototype.toJadenCase = function () {
  return this.replace(/(^|\s)[a-z]/g, function(x){ return x.toUpperCase(); });
};

#3
String.prototype.toJadenCase = function() {
  return this.split(' ').map(item => item[0].toUpperCase() + item.slice(1)).join(' ')
};

#4
String.prototype.toJadenCase = function () {
  return this.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

#5
String.prototype.toJadenCase = function () {
  return this.replace(/(?:^|\s)\S/g, function(c) { return c.toUpperCase(); });
};

*/
