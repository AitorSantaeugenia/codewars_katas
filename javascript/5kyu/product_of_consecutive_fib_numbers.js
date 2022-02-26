/* 
### Product of consecutive Fib numbers
##  The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod.

Some Examples of Return:
(depend on the language)

productFib(714) # should return (21, 34, true), 
                # since F(8) = 21, F(9) = 34 and 714 = 21 * 34

productFib(800) # should return (34, 55, false), 
                # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
-----
productFib(714) # should return [21, 34, true], 
productFib(800) # should return [34, 55, false], 
-----
productFib(714) # should return {21, 34, 1}, 
productFib(800) # should return {34, 55, 0},        
-----
productFib(714) # should return {21, 34, true}, 
productFib(800) # should return {34, 55, false}, 
Note:
You can see examples for your language in "Sample Tests".
*/

function productFib(prod) {
	// ...
	let num = 0;
	let nextNum = 1;
	let bool = 0;
	while (num * nextNum < prod) {
		nextNum = num + nextNum;
		num = nextNum - num;
		bool = num * nextNum === prod;
	}
	return [ num, nextNum, bool ];
}

console.log(productFib(4895)); // [55, 89, true]
console.log(productFib(5895)); // [89, 144, false])
console.log(productFib(74049690)); // [6765, 10946, true])
console.log(productFib(84049690)); // [10946, 17711, false])
console.log(productFib(193864606)); // [10946, 17711, true])
console.log(productFib(447577)); // [610, 987, false])
console.log(productFib(602070)); // [610, 987, true])

/* Other solutions
#1
function productFib(prod){
  let [a, b] = [0, 1];
  while(a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}

#2
function productFib(prod){
  let a = 0;
  let b = 1;
  for (let i = 0; i < prod; i++) {
    if (a * b > prod) return [a, b, false];
    if (a * b === prod) return [a, b, true];
    [a, b] = [b, a + b];
  }
}

#3
function productFib(prod){
  var findProd = function(a, b){
    if (a * b == prod) return [a, b, true];
    if (a*b > prod) return [a, b, false];
    return findProd(b, a+b);
  }
  return findProd(0, 1);
}
*/
