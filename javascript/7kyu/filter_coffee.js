/*
You love coffee and want to know what beans you can afford to buy it.

The first argument to your search function will be a number which represents your budget.

The second argument will be an array of coffee bean prices.

Your 'search' function should return the stores that sell coffee within your budget.

The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be
 sorted in ascending order.
*/

//toString();
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
//filter()
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
//sort()
//https://www.w3schools.com/jsref/jsref_sort.asp || https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function search(budget, prices) {
	let test = prices.filter((price) => price <= budget);
	//console.log("CL", test)
	return test
		.sort(function(a, b) {
			return a - b;
		})
		.toString();
	// return array of prices that are within budget
}

console.log(search(3, [ 6, 1, 2, 9, 2 ]));
console.log(search(14, [ 7, 3, 23, 9, 14, 20, 7 ]));
console.log(search(0, [ 6, 1, 2, 9, 2 ]));

/* #1
let search = (budget, prices) => prices
    .filter(p => p <= budget)
    .sort((a, b) => a - b)
    .join(',')
*/
/* #2
function search(budget, prices) {
    return prices.filter(function (elem) {
        if (elem <= budget){
            return true;
            }
    })
    .sort((a,b) => a-b).toString()
}
*/
/* #3
function search(budget, prices) {
  var arr = [];
  prices.forEach(function(p){
    if(p<=budget)
      arr.push(p);
  });
  return arr.sort(function(a,b){ return a > b }).join();
}
*/
/* #4
function search(budget, prices) {
  prices.sort((a,b)=>a-b);
  var arr=[];
  for (var i=0; i<prices.length; ++i)
    if (prices[i]<=budget)
      arr.push(prices[i]);
  return arr.join(',');
}
*/
