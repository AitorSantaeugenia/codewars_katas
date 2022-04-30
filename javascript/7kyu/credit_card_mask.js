/* ### Credit Card Mask

Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. 
However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four characters into '#'.

Examples
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"

"Skippy" --> "##ippy"

"Nananananananananananananananana Batman!"
-->
"####################################man!"

*/

// return masked string
function maskify(cc) {
	return cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);
}

console.log(maskify('4556364607935616')); // '############5616'
console.log(maskify('1')); // '1'
console.log(maskify('11111')); // '#1111'

/* Other solutions
#1
// return masked string
function maskify(cc) {
  return cc.replace(/.(?=....)/g, '#');
}

#2
function maskify(cc) {
  return cc.replace(/.(?=.{4})/g, "#");
}

#3
// card numbers is good
function maskify(cc) {
  return cc.slice(-4).padStart(cc.length,'#')
}

#4
// return masked string
function maskify(cc) {
  return '#'.repeat(cc.slice(0, -4).length) + cc.slice(-4);
}

#5
// return masked string
function maskify(cc) {
  return cc.replace(/(?=.{5})./g, '#')
}

*/
