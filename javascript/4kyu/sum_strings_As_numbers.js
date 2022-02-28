/*
### Sum Strings as Numbers
## Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'
A string representation of an integer will contain no characters besides the ten numerals "0" to "9".
*/

function sumStrings(a, b) {
	return (BigInt(a) + BigInt(b)).toString();
}
console.log(sumStrings('123', '456')); //'579'

//----------------------------------------------------------------
/* ### Other solutions
#1
function sumStrings(a, b) {
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res.replace(/^0+/, '');
}

#2
function sumStrings(a, b)
{
    var A = a.split(""), B = b.split(""), C = 0, R = "";

    while (A.length || B.length || C)
    {
        C = C + (~~A.pop() + ~~B.pop());
        R = (C % 10) + R;
        C = C > 9;
    }

    return R.replace(/^0+/, "");
}

#3
const BigNumber = require("bignumber.js")

BigNumber.config({
  EXPONENTIAL_AT: [-100, 100]
})

const sumStrings = (a,b) =>
  new BigNumber(a || 0).plus(new BigNumber(b || 0)).toString()
*/
