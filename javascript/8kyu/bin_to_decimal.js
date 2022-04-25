/* ### Bin to decimal

Complete the function which converts a binary number (given as a string) to a decimal number.

*/

function binToDec(bin) {
	// ...
	return parseInt(bin, 2);
}

/* Other solutions
#1
const binToDec = bin => [...bin].reduce((dec, bit) => dec << 1 | bit, 0);

#2
const binToDec = bin => [...bin].reverse().reduce((acc, elt, idx) => acc + elt * 2 ** idx, 0)

#3
function binToDec(bin){
  let result = 0;
  for (let i = 0; i < bin.length; i++) {
    if (bin[bin.length-i-1] == 1) {
    result+=Math.pow(2,i);
    }
  }
  return result;
}

*/
