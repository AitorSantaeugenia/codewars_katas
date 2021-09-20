/*
Description:
You will be given an array of objects (associative arrays in PHP) representing data about developers who have signed up to attend 
the next coding meetup that you are organising.

Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?

For example, given the following input array:

var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
your function should return the following array:

[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];
Notes:

The order of the properties in the objects does not matter.
The input array will always be valid and formatted as in the example above.
*/
function greetDevelopers(list) {
	//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in
	//console.log(`${property}: ${object[property]}`);
	//not a for in
	list.forEach(
		(element) =>
			(element.greeting = `Hi ${element.firstName}, what do you like the most about ${element.language}?`)
	);
	return list;
	//return `Hi ${list[property].firstName}, what do you like the most about ${list[property].language}?`
	//}
}

var list1 = [
	{ firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
	{ firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
	{ firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' }
];

console.log(greetDevelopers(list1));

/* #2
function greetDevelopers(list) {
  // thank you for checking out my kata :)
  return list.map( function( a ) {
                   a.greeting = "Hi " + a.firstName + ", what do you like the most about " + a.language + "?";
                   return a;
                  });
}
*/
/* #3
const greetDevelopers = list => list.map(
  dev => ({...dev, greeting: `Hi ${dev.firstName}, what do you like the most about ${dev.language}?`})
);
*/
/* #4
function greetDevelopers(list) {
  for (var i=0; i<list.length; ++i)
    list[i]['greeting']='Hi '+list[i].firstName+', what do you like the most about '+list[i].language+'?';
  return list;
}
*/
