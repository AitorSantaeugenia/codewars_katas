/* Pizza pieces
In her trip to Italy, Elizabeth Gilbert made it her duty to eat perfect pizza. One day she ordered one for dinner, and then some Italian friends appeared at her room. The problem is that there were many people who ask for a piece of pizza at that moment, and she had a knife that only cuts straight.

Given the number of pizza cuts, find the maximum amount of pieces of pizza that you can get (not necessarily of equal size). If the number of cuts is negative, return -1 instead (or Nothing in Haskell). 
*/

function maxPizza(cut) {
	if (cut < 0) {
		return -1;
	} else if (cut == 0) {
		return 1;
	}

	return cut * (cut + 1) / 2 + 1;
}

console.log(maxPizza(-2)); // -1
console.log(maxPizza(0)); //1
console.log(maxPizza(3)); //7
console.log(maxPizza(4)); //11
console.log(maxPizza(5)); //16
console.log(maxPizza(6)); //22

/* Other Solutions
----------------------------------
function maxPizza(cut) {
  return cut < 0 ? -1 : 1 + cut * (cut + 1) / 2;
}
----------------------------------
function maxPizza(n) {
  return n<0?-1:.5*(n*n+n+2);
}
----------------------------------
function maxPizza(cut) {
  return cut < 0 ? -1 : (cut * cut + cut + 2) >> 1
}
----------------------------------
var maxPizza = k => k < 0 ? -1 : k * (k + 1) / 2 + 1;
----------------------------------
var maxPizza = cut => cut < 0 ? -1 : cut * (cut + 1) / 2 + 1;
----------------------------------
function maxPizza(cuts) {
  if (cuts < 0) return -1;
  if (cuts === 0) return 1;
  let total = 1;
  for (var i = 1; i <=cuts; i++) {
      total += i;  
  }
  return total;
}
----------------------------------
function maxPizza(k) {
  return (k < 0) ? -1 : (k * k + k + 2) >>> 1;
}
----------------------------------
*/
