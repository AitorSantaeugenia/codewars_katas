/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces

Examples

decipherThis('72olle 103doo 100ya'); // 'Hello good day'
decipherThis('82yade 115te 103o'); // 'Ready set go'
*/

function decipherThis(str) {
	let word = str.split(' ');

	return word
		.map((str) => {
			mappedString = [ ...str ];
			let character;

			isNaN(Number(mappedString[2]))
				? ((character = String.fromCharCode(mappedString[0] + mappedString[1])),
					(mappedString = mappedString.slice(2)),
					mappedString.unshift(character))
				: ((character = String.fromCharCode(mappedString[0] + mappedString[1] + mappedString[2])),
					(mappedString = mappedString.slice(3)),
					mappedString.unshift(character));

			if (mappedString.length == 2) {
				return mappedString.join('');
			}
			let secondChar = mappedString.slice(1, 2);
			let lastChar = mappedString.slice(mappedString.length - 1);
			mappedString[mappedString.length - 1] = secondChar;
			mappedString[1] = lastChar;

			return mappedString.join('');
		})
		.join(' ');
}
/* // Other solutions
//#1
function decipherThis(str) {
  return str.split(" ")
    .map(w =>
      w.replace(/^\d+/, c => String.fromCharCode(c))
       .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
    )
    .join(" ")
}
*/
/*
//#2
const decipherThis = str =>
  str.replace(/\b(\d+)(\w?)(\w*?)(\w?)\b/g, (_, $1, $2, $3, $4) => String.fromCharCode($1) + $4 + $3 + $2);
*/
/*
//#3
const decipherThis = str => str.replace(/\b(\d{2,3})(\w?)(\w*?)(\w?)\b/g, (_, num, second, middle, last) => String.fromCharCode(num) + last + middle + second);
*/
/*
//#4
function decipherThis(str) {
  return str.split(" ")
    .map(i =>
      i.replace(/^\d+/, a => String.fromCharCode(a ))
       .replace(/^(.)(.)(.*)(.)$/, "$1$4$3$2")
    )
    .join(" ")
}
*/
