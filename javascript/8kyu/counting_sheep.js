/*
### Counting sheep...
##  Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

    For example,

    [true,  true,  true,  false,
      true,  true,  true,  true ,
      true,  false, true,  false,
      true,  false, false, true ,
      true,  true,  true,  true ,
      false, false, true,  true]
    The correct answer would be 17.

    Hint: Don't forget to check for bad values like null/undefined
*/

function countSheeps(arrayOfSheep) {
	// TODO May the force be with you
	return arrayOfSheep.filter((item) => item === true).length;
}

var array1 = [
	true,
	true,
	true,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	true,
	false,
	true,
	false,
	false,
	true,
	true,
	true,
	true,
	true,
	false,
	false,
	true,
	true
];

console.log(countSheeps(array1)); // 17, "There are 17 sheeps in total"

// Other Solutions
/*
#1
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

#2
function countSheeps(arr) {
  return arr.filter(Boolean).length;
}

#3
const countSheeps = arrayOfSheeps => arrayOfSheeps.filter(s => s).length;
  */
