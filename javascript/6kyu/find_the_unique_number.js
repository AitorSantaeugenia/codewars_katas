// ### Find the unique number

// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique

function findUniq(arr) {
	// do magic
	return +arr.filter((value) => {
		return arr.indexOf(value) == arr.lastIndexOf(value);
	});
}

console.log(findUniq([ 1, 0, 0 ])); // 1;
console.log(findUniq([ 0, 1, 0 ])); // 1;
console.log(findUniq([ 0, 0, 1 ])); // 1;
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ])); // 2
console.log(findUniq([ 1, 1, 2, 1, 1 ])); // 2
console.log(findUniq([ 3, 10, 3, 3, 3 ])); // 10

/* Other solutions
-----------------------------
function findUniq(arr) {
  arr.sort((a,b)=>a-b);
  return arr[0]==arr[1]?arr.pop():arr[0]
}
-----------------------------
function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}
-----------------------------
function findUniq(arr) {
  let [a,b,c] = arr.slice(0,3);
  if( a != b && a!=c ) return a;
  for( let x of arr ) if( x!=a ) return x
}
-----------------------------
function findUniq(arr) {
  return +arr.filter( (value) => { return arr.indexOf(value) == arr.lastIndexOf(value) } );
}
-----------------------------
function findUniq(arr) {
 return arr.filter(function(elem){
  return arr.indexOf(elem)===arr.lastIndexOf(elem)
 })[0] 
 
}
-----------------------------
function findUniq(arr) {
  var aux = (arr[0] != arr[1]) ? arr[3] : arr[0];
  return arr.filter(x=> x != aux)[0];
}
-----------------------------
function findUniq(arr) {
  return arr.find(e => arr.lastIndexOf(e) === arr.indexOf(e))
}
*/
