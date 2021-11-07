/* SIMPLE PIG LATIN
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !

*/
function pigIt(str) {
	let arr = str.split(' ');
	let pgArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (/([a-zA-Z])/.test(arr[i])) {
			pgArr.push(arr[i].substring(1) + arr[i][0] + 'ay');
		} else {
			pgArr.push(arr[i]);
		}
	}
	return pgArr.join(' ');
}

console.log(pigIt('Pig latin is cool')); //'igPay atinlay siay oolcay'
console.log(pigIt('This is my string')); //hisTay siay ymay tringsay'
console.log(pigIt('Oay emporatay oay oresmay 4')); //Oay emporatay oay oresmay !

/*
Other solutions
--------------------------
#1
function pigIt(str){
  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
}
--------------------------
function pigIt(str) {
  return str.replace(/\w+/g, (w) => {
    return w.slice(1) + w[0] + 'ay';
  });
}
--------------------------
function pigIt(str) {
  var arrayWord = str.split(' ');
  return arrayWord.map(function(word) {
    var firstLetter = word.charAt(0);
    return word.slice(1) + firstLetter + 'ay';
  }).join(' ');
}
--------------------------
*/
