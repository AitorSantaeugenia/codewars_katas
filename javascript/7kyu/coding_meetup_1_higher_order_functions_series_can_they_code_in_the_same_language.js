/*
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed 
up to attend the next coding meetup that you are organising.

Your task is to return either:

true if all developers in the list code in the same language; or
false otherwise.
For example, given the following input array:

var list1 = [
  { firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
  { firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' },
];
your function should return true.

Notes:

The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted will 
upper-case 'J' and 'S'
The input array will always be valid and formatted as in the example above.
*/
function isSameLanguage(list) {
	// thank you for checking out the Coding Meetup kata :)
	//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
	let findInList = list.every(({ language }) => language === list[0].language);
	return findInList ? true : false;
}

var list1 = [
	{ firstName: 'Daniel', lastName: 'J.', country: 'Aruba', continent: 'Americas', age: 42, language: 'JavaScript' },
	{ firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 22, language: 'JavaScript' },
	{ firstName: 'Hanna', lastName: 'L.', country: 'Hungary', continent: 'Europe', age: 65, language: 'JavaScript' }
];
var list2 = [
	{ firstName: 'Mariami', lastName: 'G.', country: 'Georgia', continent: 'Europe', age: 29, language: 'Python' },
	{ firstName: 'Mia', lastName: 'H.', country: 'Germany', continent: 'Europe', age: 39, language: 'Ruby' },
	{ firstName: 'Maria', lastName: 'I.', country: 'Greece', continent: 'Europe', age: 32, language: 'C' }
];
// random test not passing
var list3 = [
	{ firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
	{
		firstName: 'Victoria',
		lastName: 'T.',
		country: 'Puerto Rico',
		continent: 'Americas',
		age: 30,
		language: 'Clojure'
	},
	{ firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
];

console.log(isSameLanguage(list1));
console.log(isSameLanguage(list2));
console.log(isSameLanguage(list3));

/* #1
function isSameLanguage(list) {
  return list.every(e => e.language === list[0].language);
}
*/
/* #2
function isSameLanguage(list) {
  for (var i = 0; i < list.length; i++) {
  if (list[0].language !== list[i].language) {
  return false;
  }
  }
  return true;
}
*/
