/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged 
to match str2, otherwise returns false.

Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered
Input strings s1 and s2 are null terminated.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/

function scramble(str1, str2) {
	let occurences = str1.split('').reduce((arr, occur) => {
		arr[occur] ? arr[occur]++ : (arr[occur] = 1);
		return arr;
	}, {});
	return str2.split('').every((character) => --occurences[character] >= 0);
}

console.log(scramble('rkqodlw', 'world'));
console.log(scramble('cedewaraaossoqqyt', 'codewars'));
console.log(scramble('katas', 'steak')); //false
console.log(scramble('scriptjava', 'javascript'));
console.log(scramble('scriptingjava', 'javascript'));
console.log(scramble('scriptsjava', 'javascripts'));
console.log(scramble('jscripts', 'javascript')); //false
console.log(scramble('aabbcamaomsccdd', 'commas'));

//Other solutions
/*
function scramble(str1, str2) {
	var array1 = str1.split('').sort();
	var array2 = str2.split('').sort();
	var i = 0;
	for (var x = 0; i < array2.length && x <= array1.length; x++) {
		if (array2[i] === array1[x]) {
			i++;
		}
	}
	return x <= array1.length;
}
*/
/*
function scramble(str1, str2) {
	const reducer = (container, element) => {
		if (container[element] === undefined) {
			container[element] = 1;
			return container;
		} else {
			container[element] += 1;
			return container;
		}
	};

	let container1 = str1.split('').reduce(reducer, {});
	let container2 = str2.split('').reduce(reducer, {});

	for (let prop in container2) {
		if (!container1[prop]) return false;

		if (container1[prop] < container2[prop]) return false;
	}
	return true;
}
*/

//-------------------------------------------------------------------------------
//Bonus
//NOT PASSING TESTS
/*
function scramble(str1, str2) {
	//code me
	//const greaterOrEqualThanZero = (currentValue) => currentValue >= 0;
	return str2.split('').map((letter) => str1.indexOf(letter)).every((e) => e >= 0);
}
//This one either
function scramble(str1, str2) {
	for (const letter of str2) {
		if (!str1.includes(letter)) {
			return false;
		}
	}
	return true;
}
//This one passes all the test, but not the times
function scramble(str1, str2) {
	let arr = str2.split('').sort();
	let sorted_str1 = str1.split('').sort().join();

	return arr.every(function(a) {
		let i = sorted_str1.indexOf(a);
		if (i > -1) {
			sorted_str1 = sorted_str1.substring(i + 1, sorted_str1.length);
			return true;
		} else {
			return false;
		}
	});
}
*/
