// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.
class SmallestIntegerFinder {
	findSmallestInt(args) {
		return Math.min(...args);
	}
}

console.log(findSmallestInt([ 78, 56, 232, 12, 8 ])); //8
console.log(findSmallestInt([ 78, 56, 232, 12, 18 ])); //12
console.log(findSmallestInt([ 78, 56, 232, 412, 228 ])); //56
console.log(findSmallestInt([ 78, 56, 232, 12, 0 ])); //0
console.log(findSmallestInt([ 1, 56, 232, 12, 8 ])); //1

/* Other solutions
---------------------
class SmallestIntegerFinder {
	findSmallestInt(args) {
	  return Math.min.apply(null, args);
	}
  }
---------------------
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.sort((a,b)=>a-b)[0];
  }
}
---------------------
class SmallestIntegerFinder {
  findSmallestInt( $ ) {
    return Math.min(...$);
  }
}
---------------------
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return args.reduce(function(prev, curr, index, array) {
      return prev < curr ? prev : curr;
    });
  }
}
---------------------
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(Math, args)
  }
}
---------------------
class SmallestIntegerFinder {
  findSmallestInt(args) {
    var lowest;
    for(var i in args){
      if(i==0){
        lowest = args[i];
      }
      else {
        if(lowest >= args[i]){
        lowest = args[i];
        }
      }
    }
    return lowest;
  }
}
---------------------
*/
