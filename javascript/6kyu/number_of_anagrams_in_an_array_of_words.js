/*
An anagram is a word, a phrase, or a sentence formed from another by rearranging its letters. 
An example of this is "angel", which is an anagram of "glean".

Write a function that receives an array of words, and returns the total number of distinct pairs of anagramic words inside it.

Some examples:

There are 2 anagrams in the array ["dell", "ledl", "abc", "cba"]
There are 7 anagrams in the array ["dell", "ledl", "abc", "cba", "bca", "bac"]
*/

function anagramCounter(wordsArray) {
	let counter = 0;
	let wordsArrayOne;
	let wordsArrayTwo;

	for (let i = 0; i < wordsArray.length - 1; i++) {
		wordsArrayOne = wordsArray[i].split('').sort().join('');
		for (let j = i + 1; j < wordsArray.length; j++) {
			wordsArrayTwo = wordsArray[j].split('').sort().join('');
			if (wordsArrayOne === wordsArrayTwo) {
				counter++;
			}
		}
	}

	return counter;
}
