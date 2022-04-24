/* ### Convert string to camel case

Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"

*/

function toCamelCase(str) {
	return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

console.log(toCamelCase('')); //"" "An empty string was provided but not returned"
console.log(toCamelCase('the_stealth_warrior')); //"theStealthWarrior" "toCamelCase('the_stealth_warrior') did not return correct value"
console.log(toCamelCase('The-Stealth-Warrior')); //"TheStealthWarrior" "toCamelCase('The-Stealth-Warrior') did not return correct value"
console.log(toCamelCase('A-B-C')); //"ABC", "toCamelCase('A-B-C') did not return correct value"

/* Other solutions
#1
function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}

#2
function toCamelCase(str){
  return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
}

#3
function toCamelCase(str){
  return str.split(/\-|_/).reduce(function(previous, current, index){ return camelize(previous, current, index);});
}

function camelize(previous, current, index){
  return previous + current.capitalizeFirstLetter();
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

#4
function toCamelCase(str){
  return str.replace(/[_-]\w/gi, ch => ch[1].toUpperCase());
}
*/
