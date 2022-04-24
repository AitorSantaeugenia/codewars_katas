/* ### Greed is Good

Greed is a dice game played with five six-sided dice. 
Your mission, should you choose to accept it, is to score a throw according to these rules.
You will always be given an array with five six-sided dice values.

 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" 
can only count as part of a triplet (contributing to the 500 points) or as a single 50 points,
 but not both in the same roll.

Example scoring

 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)

In some languages, it is possible to mutate the input to the function. 

This is something that you should never do. If you mutate the input, 
you will not be able to pass all the tests.
*/

function score(dice) {
	let total = 0;
	let ones = 0;
	let twos = 0;
	let threes = 0;
	let fours = 0;
	let fives = 0;
	let sixes = 0;

	dice.forEach(function(roll) {
		if (roll === 1) {
			ones++;
			if (ones === 3) {
				total += 1000;
				ones = 0;
			}
		}
		if (roll === 5) {
			fives++;
			if (fives === 3) {
				total += 500;
				fives = 0;
			}
		}
		if (roll === 2) twos++;
		if (roll === 3) threes++;
		if (roll === 4) fours++;
		if (roll === 6) sixes++;
	});

	total += ones * 100;
	total += fives * 50;
	if (sixes >= 3) total += 600;
	if (fours >= 3) total += 400;
	if (threes >= 3) total += 300;
	if (twos >= 3) total += 200;

	return total;
}

console.log(score([ 2, 3, 4, 6, 2 ])); //"Should be 0 :-("
console.log(score([ 4, 4, 4, 3, 3 ])); //"Should be 400"
console.log(score([ 2, 4, 4, 5, 4 ])); //"Should be 450"

/* Other solutions
#1
function score( dice ) {
  var dc = [0,0,0,0,0,0];
  var tdr = [1000,200,300,400,500,600];
  var sdr = [100,0,0,0,50,0];
  dice.forEach(function(x){ dc[x-1]++; });
  return dc.reduce(function(s,x,i){ 
    return s + (x >= 3? tdr[i] : 0) + sdr[i]*(x % 3);
  },0);
}

#2
function score( dice ) {
  var six=0, five=0, four=0, three=0, too=0, one=0;
  var i = 0;
  while (i < 5) {
    if (dice[i] == 6) { six++; }
    if (dice[i] == 5) { five++; }
    if (dice[i] == 4) { four++; }
    if (dice[i] == 3) { three++; }
    if (dice[i] == 2) { too++; }
    if (dice[i] == 1) { one++; }
    i++;
  }
  var r = 0;
  if (one > 2) { r += 1000; one -= 3;}
  if (six > 2) { r += 600; }
  if (five > 2) { r += 500; five -= 3;}
  if (four > 2) { r += 400; }
  if (three > 2) { r += 300; }
  if (too > 2) { r += 200; }
  r += one * 100;
  r += five * 50;
  return r;
}

#3
function score( dice ) {
  if (dice.length !== 5) return 0;
  
  let diceStr = dice.sort().join('');
  let score = 0;
  const rules = [
    { reg: /111/, score: 1000 },
    { reg: /666/, score: 600 },
    { reg: /555/, score: 500 },
    { reg: /444/, score: 400 },
    { reg: /333/, score: 300 },
    { reg: /222/, score: 200 },
    { reg: /1/,   score: 100 },
    { reg: /5/,   score: 50 },
  ];
  
  rules.forEach(rule => {
    while (rule.reg.test(diceStr)) {
      diceStr = diceStr.replace(rule.reg, '');
      score += rule.score;
    }
  });
  
  return score;
}

#4
function score( dice ) {
  var score = [0, 0, 0, 0, 0, 0];

  dice.forEach(function(die) {
    ++score[die - 1];
  });

  return score.reduce(function(total, n, i) {
    switch (i + 1) {
      case 1:
        return total + (Math.floor(n / 3) * 1000) + ((n % 3) * 100);

      case 5:
        return total + (Math.floor(n / 3) * 500) + ((n % 3) * 50);

      default:
        return total + (Math.floor(n / 3) * (i + 1) * 100);
    }
  }, 0);
}

#5
function score( dice ) {
  var v = {
    111: 1000,
    222: 200,
    333: 300,
    444: 400,
    555: 500,
    666: 600,
    1: 100,
    5: 50
  };
  
  var s = dice.sort().join('').match(/(([1-6])\2\2)|(1|5)/g) || [];
  return s.reduce(function (a, e) {
    return a + v[e];
  }, 0);
}

*/
