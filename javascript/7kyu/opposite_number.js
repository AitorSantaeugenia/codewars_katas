/*
Very simple, given a number, find its opposite.

Examples:

1: -1
14: -14
-34: 34
*/
function opposite(number) {
	//your code here
	return number > 0 ? -number : number * -1;
}

console.log(opposite(1));
