/* ### Split Strings

Complete the solution so that it splits the string into pairs of two characters. 
If the string contains an odd number of characters then it should replace the missing second 
character of the final pair with an underscore ('_').

Examples:

* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']

*/

function solution(str) {
	const strMatch = str.match(/\w{1,2}/g);

	if (str.length === 0) {
		return [];
	}

	const result = strMatch.map((letter) => {
		return letter.length % 2 ? letter + '_' : letter;
	});

	return result;
}

console.log(solution('abcdef')); //["ab", "cd", "ef"]
console.log(solution('abcdefg')); //["ab", "cd", "ef", "g_"]
console.log(solution('')); // []

/* Other solutions
#1
function solution(s){
   return (s+"_").match(/.{2}/g)||[]
}

#2
function solution(str){
  var i = 0;
  var result = new Array();
  if (str.length % 2 !== 0) {
    str = str + '_';
  }
  while (i < str.length) {
      result.push(str[i] + str[i+1]);
      i += 2;
    }
  return result;
}

#3
function solution(str){
  arr = [];
  for(var i = 0; i < str.length; i += 2){
    second = str[i+1] || '_';
    arr.push(str[i] + second);
  }
  return arr;
}

#4
const solution = str => ((str+"_").match(/../g)||[]);

#5
function solution(str){
  let res = [];
  for (var i = 0; i < str.length; i +=2) res.push(`${str[i] + (str[i+1] || '_')}`)
   return res;
}

#6
function solution(str) {
  const arr = str.split('');

  return arr
    .map((el, i) => el + (arr.splice(i + 1, 1)[0] || '_'))
    .filter(el => el);
}
*/
