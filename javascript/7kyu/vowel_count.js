/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/
function getCount(str) {
	let vowelsCount = 0;
	let vocals = 'AEIOUaeiou';

	// enter your majic here
	for (let i = 0; i < str.length; i++) {
		if (vocals.indexOf(str[i]) !== -1) {
			vowelsCount++;
		}
	}

	return vowelsCount;
}

let test = 'abracadabra';
console.log(getCount(test));
