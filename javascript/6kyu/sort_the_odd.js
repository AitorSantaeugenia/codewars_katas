//  ### Hex to base64

// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

// Examples
// [7, 1]  =>  [1, 7]
// [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
// [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

function sortArray(array) {
	// Return a sorted array.
	const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
	return array.map((x) => (x % 2 ? odd.shift() : x));
}

console.log(sortArray([ 5, 3, 2, 8, 1, 4 ])); //[1, 3, 2, 8, 5, 4]
console.log(sortArray([ 5, 3, 1, 8, 0 ])); // [1, 3, 5, 8, 0]
console.log(sortArray([])); //[]

/* Other solutions
-----------------------------
function sortArray(array) {
  let oddList = array.filter( num => num%2 ).sort( (a,b) => b-a );

  return array.map( num => {
    return num%2 ? oddList.pop() : num;
  });
}

const sortArray = (array) => {
  let oddArr = array.filter(el => el % 2 !== 0).sort((a, b) => a - b);
  
  return array.map(el => el % 2 === 0 ? el : oddArr.shift());
};

sortArray=(a,b=a.filter(a=>a%2).sort((a,b)=>a-b))=>a.map(a=>a%2?b.shift():a)
*/
