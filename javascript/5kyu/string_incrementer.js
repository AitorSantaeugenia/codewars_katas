/* STRING INCREMENTER
Your job is to write a function which increments a string, to create a new string.

If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string.
Examples:

foo -> foo1

foobar23 -> foobar24

foo0042 -> foo0043

foo9 -> foo10

foo099 -> foo100

Attention: If the number has leading zeros the amount of digits should be considered.
*/
function incrementString(strng) {
	// return incrementedString
	let incrementedString = strng.replace(/[0-9]/g, '');
	//console.log("String = " + incrementedString)

	let len = strng.length - incrementedString.length;
	//console.log('LEN = : ' + len);

	let number = strng.slice(incrementedString.length);
	number = (Number(number) + 1).toString();
	//console.log("Number = " + number)

	while (number.length < len) {
		number = '0' + number;
	}

	//console.log("Number = " + number)
	return incrementedString.concat(number);
}
console.log(incrementString('foobar000')); //foobar001
console.log(incrementString('foobar99')); //foobar100
console.log(incrementString('foobar099')); //foobar100
