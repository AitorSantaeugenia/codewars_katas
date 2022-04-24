/* ### Primes in numbers

Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

 "(p1**n1)(p2**n2)...(pk**nk)"
with the p(i) in increasing order and n(i) empty if n(i) is 1.

Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

*/

function primeFactors(n) {
	//your code here
	let newArr = [],
		obj = {},
		str = '';
	cal(n);
	function cal(n) {
		if (n > 1) {
			for (let i = 2; i <= n; i++) {
				if (n % i == 0) {
					newArr.push(i);
					cal(n / i);
					return true;
				}
			}
		} else {
			return true;
		}
	}
	newArr.map(function(x) {
		obj[x] ? obj[x]++ : (obj[x] = 1);
	});
	for (let item in obj) {
		obj[item] == 1 && (str += '(' + item + ')');
		obj[item] > 1 && (str += '(' + item + '**' + obj[item] + ')');
	}
	return str;
}

console.log(primeFactors(7775460)); //"(2**2)(3**3)(5)(7)(11**2)(17)"

/* Other solutions
#1
function primeFactors(n){
  for (var i=2, res="", f; i <= n; i++) {
    f=0;
    while (n%i == 0) { f++; n/=i }
    res += f ? "(" + ( f>1 ? i+"**"+f  : i ) +")" : ""
  }
  return res || "("+n+")"
}

#2
function primeFactors(n){
    for(var s = '', d = 2;n>1;d++) {
        for (var k = 0;n%d == 0;k++, n/=d);
        s += k ? (k==1 ? `(${d})` : `(${d}**${k})`) : '';
    }
return s
}

#3
const primeFactors = n => {
  if (n < 2) return `(${n})`;
  let factors = '';
  for ( let i = 2; i <= n; i++) {
    let count = 0;
    while ( n%i === 0 ) {
      count++; 
      n /= i;
    }
    if (count) {
      factors += `(${i}`;
      if (count > 1) factors += `**${count}`;
      factors += `)`;
    }
  }
  return factors;
}

*/
