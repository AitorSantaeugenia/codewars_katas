/* ### Beginner Series #2 Clock

Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1

result = 61000
Input constraints:

0 <= h <= 23
0 <= m <= 59
0 <= s <= 59


*/

function past(h, m, s) {
  //#Happy Coding! ^_^
  let hour = h * 3600000;
  let min = m * 60000;
  let sec = s * 1000;
  return hour + min + sec;
}

console.log(past(0, 1, 1)); //,61000)
console.log(past(1, 1, 1)); //,3661000)
console.log(past(0, 0, 0)); //,0)
console.log(past(1, 0, 1)); //,3601000)
console.log(past(1, 0, 0)); //,3600000)

/* Other solutions
#1
function past(h, m, s){
  const setTime = new Date().setHours(h, m, s);
  const midnight = new Date().setHours(0, 0, 0);
  
  return Math.round(setTime - midnight);
}

#2
const past = (...args) =>
  args.reduce((pre, val) => 60 * pre + val, 0) * 1e3;
  
// OR
// const past = (h, m, s) =>
//   new Date(0, 0, 0, h, m, s) - new Date(0, 0, 0);

#3
function past(h, m, s){
  return (((h*60) + m)*60 + s)*1000;
}
*/
