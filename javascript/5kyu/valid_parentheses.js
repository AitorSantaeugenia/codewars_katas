/*
### Valid Parentheses

## Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

function validParentheses(parens) {
	// your code here ..
	if (parens.length % 2 != 0) {
		return false;
	}
	let string = parens.slice();

	for (let i = 0; i <= string.length; i++) {
		string = string.replace(/\(\)/g, '');
	}

	return string.replace(/\(\)/g, '') === '';
}
console.log(validParentheses('(')); //false
console.log(validParentheses(')')); //false
console.log(validParentheses('')); //true
console.log(validParentheses('()')); //true
console.log(validParentheses('())')); //false

/* Other solutions
#1
function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  
  return n == 0;
}

#2
function validParentheses(parens){
  var indent = 0;
  
  for (var i = 0 ; i < parens.length && indent >= 0; i++) {
    indent += (parens[i] == '(') ? 1 : -1;    
  }
  
  return (indent == 0);
}

#3
function validParentheses(parens){
  var re = /\(\)/;
  while (re.test(parens)) parens = parens.replace(re, "");
  return !parens;
}
*/
