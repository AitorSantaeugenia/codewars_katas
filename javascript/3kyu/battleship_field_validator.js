/*
### Battleship field validator

Write a method that takes a field for well-known board game "Battleship" as an argument and returns true if it has a valid 
disposition of ships, false otherwise. Argument is guaranteed to be 10*10 two-dimension array. Elements in the array are numbers,
 0 if the cell is free and 1 if occupied by ship.

Battleship (also Battleships or Sea Battle) is a guessing game for two players. Each player has a 10x10 grid containing several 
"ships" and objective is to destroy enemy's forces by targetting individual cells on his field. The ship occupies one or more 
cells in the grid. Size and number of ships may differ from version to version. In this kata we will use Soviet/Russian version
 of the game.


Before the game begins, players set up the board and place the ships accordingly to the following rules:
There must be single battleship (size of 4 cells), 2 cruisers (size 3), 3 destroyers (size 2) and 4 submarines (size 1). 
Any additional ships are not allowed, as well as missing ships.
Each ship must be a straight line, except for submarines, which are just single cell.

The ship cannot overlap or be in contact with any other ship, neither by edge nor by corner.

This is all you need to solve this kata. If you're interested in more information about the game, visit this link [https://en.wikipedia.org/wiki/Battleship_(game)]
*/

function validateBattlefield(field) {
	// write your magic here
	function check(j, i) {
		return j < 0 || j > 9 || i < 0 || i > 9 ? false : !!field[i][j];
	}

	function key(j, i) {
		return j + ' ' + i;
	}

	const ship = {};
	const shipSize = {};

	for (let i = 0; i < 10; i++) {
		for (let j = 0; j < 10; j++) {
			if (!ship[key(j, i)] && check(j, i)) {
				ship[key(j, i)] = true;

				let jLength = 1;
				while (check(j + jLength, i)) {
					ship[key(j + jLength, i)] = true;
					jLength++;

					if (check(j + jLength, i - 1) || check(j + jLength, i + 1)) {
						return false;
					}
				}
				let iLength = 1;
				while (check(j, i + iLength)) {
					ship[key(j, i + iLength)] = true;
					iLength++;

					if (check(j - 1, i + iLength) || check(j + 1, i + iLength)) {
						return false;
					}
				}
				if (jLength > 1 && iLength > 1) {
					return false;
				}

				if (jLength > 1) {
					if (
						check(j - 1, i - 1) ||
						check(j - 1, i) ||
						check(j - 1, i + 1) ||
						check(j + jLength, i - 1) ||
						check(j + jLength, i) ||
						check(j + jLength, i + 1)
					) {
						return false;
					}
				} else {
					if (
						check(j - 1, i - 1) ||
						check(j, i - 1) ||
						check(j + 1, i - 1) ||
						check(j - 1, i + iLength) ||
						check(j, i + iLength) ||
						check(j + 1, i + iLength)
					) {
						return false;
					}
				}
				let length = jLength > iLength ? jLength : iLength;

				shipSize[length] = shipSize[length] ? shipSize[length] + 1 : 1;
			}
		}
	}

	return shipSize[1] === 4 && shipSize[2] === 3 && shipSize[3] === 2 && shipSize[4] === 1;
}

console.log(
	validateBattlefield([
		[ 1, 0, 0, 0, 0, 1, 1, 0, 0, 0 ],
		[ 1, 0, 1, 0, 0, 0, 0, 0, 1, 0 ],
		[ 1, 0, 1, 0, 1, 1, 1, 0, 1, 0 ],
		[ 1, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
		[ 0, 0, 0, 0, 1, 1, 1, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 1, 0 ],
		[ 0, 0, 0, 1, 0, 0, 0, 0, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 1, 0, 0 ],
		[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ]
	])
);
//----------------------------------------------------------------
/* ### Other solutions
#1
function validateBattlefield(field) {
  var hit = (row, col) => (row < 0 || col < 0 || row > 9 || col > 9) ? 0 : field[row][col];
  for (var ships = [10,0,0,0,0], row = 0; row < 10; row++) {
    for (var col = 0; col < 10; col++) {
      if ( hit(row,col) ) {
        if ( hit(row-1, col-1) || hit(row-1, col+1) ) return false; // Corner is touching
        if ( hit(row-1, col  ) && hit(row  , col-1) ) return false; // Side is touching
        if ( ( field[row][col] += hit(row-1, col) + hit(row, col-1) ) > 4 ) return false; // Ship is too long
        ships[field[row][col]]++; ships[field[row][col] - 1]--;
  } } }
  return [0,4,3,2,1].every((s,i) => s == ships[i]);
}

#2
function validateBattlefield(field) {
  let ships = [0,4,3,2,1];                             // initialize ships to be found
  const s = (x, y) => field[x] && field[x][y];         // formula for "is ship at [x, y]?"
  for (let i = 0; i < 100; i++) {                      // check all spaces in field
    let x = i%10, y = i/10|0, l = 0;                   // calculate x & y, initialize length
    if (s(x, y)) {                                     // ship found at [x, y]?
      if (s(x+1, y+1) || s(x-1, y+1)) return false;    // corners touching?
      if (s(x+1, y  ) && s(x  , y+1)) return false;    // sides touching?
      while(s(x+l, y  )) { field[x+l][y  ] = 0; l++; } // find vertical ship
      while(s(x  , y+l)) { field[x  ][y+l] = 0; l++; } // find horizontal ship
      if (ships[l]) ships[l]--; else return false;     // record found ship
    }
  }
  return ships.every(s => s === 0);                    // verify all ships found
}

#3
function validateBattlefield(field) {
  var s = "000000000000", f = s + field.join("0").replace(/,/g, "") + s;
  var ships = [4, 3, 2, 1], h = "0(?=00........010........000)", v = h;
  if (f.match(/1.{9}(..)?1/)) return false;
  for (var i = 0; i < ships.length; ++ i) {
    if ((f.match(new RegExp(h + "|" + v, "g")) || []).length != ships[i]) return false;
    h = h.replace(/([01])0(\.|(?=\)))/g, "$1$10");
    v = v.replace(/(01+0\.+)/, "$1$1");
  }
  return true;
}

#4
function validateBattlefield(field) {
  var s = "000000000000", f = s + field.join("0").replace(/,/g, "") + s;
  var ships = "4321", h = "0(?=00........010........000)", v = h + "|" + h;
  if (/1.{9}(..)?1/.test(f)) return false;
  for (var i = 0; i < 10; ++ i) {
    if (f.split(new RegExp(v)).length != -~ships[i]) return false;
    v = v.replace(/([01])(0)(\.|(?=\)))(?=.*\|)|(01+0\.+)(?!.*1)/g, "$1$1$2$4$4");
  }
  return true;
}
*/
