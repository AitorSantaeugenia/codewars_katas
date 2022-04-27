/* ### Stop gninnipS My sdroW!

Write a function that takes in a string of one or more words, and returns the same string, 
but with all five or more letter words reversed (Just like the name of this Kata). Strings 
passed in will consist of only letters and spaces. Spaces will be included only when more than
one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=>
returns "This is rehtona test"

*/

function spinWords(string) {
	//TODO Have fun :)
	return string.split(' ').map((word) => (word.length < 5 ? word : word.split('').reverse().join(''))).join(' ');
}

console.log(spinWords('Welcome')); //"emocleW"
console.log(spinWords('Hey fellow warriors')); //"Hey wollef sroirraw"
console.log(spinWords('This is a test')); //"This is a test"
console.log(spinWords('This is another test')); //"This is rehtona test"
console.log(spinWords('You are almost to the last test')); //"You are tsomla to the last test"
console.log(spinWords('Just kidding there is still one more')); //"Just gniddik ereht is llits one more"
console.log(spinWords('Seriously this is the last one')); //"ylsuoireS this is the last one"

/* Other solutions
#1
function spinWords(string){
  return string.replace(/\w{5,}/g, function(w) { return w.split('').reverse().join('') })
}

#2
function spinWords(str){
  return str.split(' ').map(spinSingleWord).join(' ');
}

function spinSingleWord(word){
  return word.length>4 ? word.split('').reverse().join('') : word;
}

#3
function spinWords(str) {
  let strArr = str.split(' ');
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].length >= 5)
      strArr[i] = strArr[i].split('').reverse().join('');
  }
  return strArr.join(' ');
}

#4
function spinWords(str){
  wordsArray = str.split(' ');
  wordsArray.forEach(function(word, index){
    if (word.length > 4) {
      wordsArray[index] = word.split('').reverse().join('');
    }
  });
  return wordsArray.join(' ');
}
*/
