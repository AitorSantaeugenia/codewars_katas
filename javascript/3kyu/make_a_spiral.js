/*
** Caution: This kata does not currently have any known supported versions for JavaScript. 
It may not be completable due to dependencies on out-dated libraries/language versions. **
### Make a spiral
## Your task, is to create a NxN spiral with a given size.

For example, spiral with size 5 should look like this:

00000
....0
000.0
0...0
00000
and with the size 10:

0000000000
.........0
00000000.0
0......0.0
0.0000.0.0
0.0..0.0.0
0.0....0.0
0.000000.0
0........0
0000000000
Return value should contain array of arrays, of 0 and 1, with the first row being composed of 1s. For example for given size 5 result should be:

[[1,1,1,1,1],[0,0,0,0,1],[1,1,1,0,1],[1,0,0,0,1],[1,1,1,1,1]]
Because of the edge-cases for tiny spirals, the size will be at least 5.

General rule-of-a-thumb is, that the snake made with '1' cannot touch to itself.
*/
function spiralize(n) {
	if (n == 2) return [ [ 1, 1 ], [ 0, 1 ] ];
	if (n == 3) return [ [ 1, 1, 1 ], [ 0, 0, 1 ], [ 1, 1, 1 ] ];
	var base = spiralize(n - 2);
	var res = [ [], [] ];
	for (var i = 0; i < n; i++) res[0].push(1) && res[1].push(0);
	res[1][n - 1] = 1;
	for (var i = n - 3; i >= 0; i--) {
		res.push(base[i].reverse().concat([ 0, 1 ]));
	}
	res[n - 1][n - 2] = 1;
	return res;
}

console.log(spiralize(5));
/*
[ 1, 1, 1, 1, 1 ], 
[ 0, 0, 0, 0, 1 ], 
[ 1, 1, 1, 0, 1 ], 
[ 1, 0, 0, 0, 1 ], 
[ 1, 1, 1, 1, 1 ]
*/

console.log(spiralize(8));
/*[ 1, 1, 1, 1, 1, 1, 1, 1 ],
[ 0, 0, 0, 0, 0, 0, 0, 1 ],
[ 1, 1, 1, 1, 1, 1, 0, 1 ],
[ 1, 0, 0, 0, 0, 1, 0, 1 ],
[ 1, 0, 1, 0, 0, 1, 0, 1 ],
[ 1, 0, 1, 1, 1, 1, 0, 1 ],
[ 1, 0, 0, 0, 0, 0, 0, 1 ],
[ 1, 1, 1, 1, 1, 1, 1, 1 ];
*/

//----------------------------------------------------------------
/* ### Other solutions
#1
function spiralize(n) {
	return Array(n).fill(Array(n).fill()).map((x, row) =>
		x.map((y, col) => {
			return +(
				(row < n / 2 && row % 2 === 0 && col >= row - 2 && col <= n - row - 1) ||
				((n - col) % 2 === 1 && row > n - col - 1 && row <= col) ||
				((n - row) % 2 === 1 && col > n - row - 1 && col < row) ||
				(col % 2 === 0 && row > col + 1 && row < n - col)
			);
		})
	);
}

#2
function spiralize(size) {

    let a = Array(size).fill(0).map( i => Array(size) );

    let v = 1;
    for (let j = 0; j < Math.ceil(size/2); j++) {
        for (let i = j; i < size - j; i++) {
            a[i][j] = a[j][i] = v;
            a[i][size - 1 - j] = a[size - 1 - j][i] = v;
        }
        v = ++v%2;
        a[j + 1][j] = v;
    }

    return a;
};

#3
var spiralize = n =>{
  var a = Array(n).fill(0).map(_ => Array(n))
  for (var y = 0, c = 1; y < n/2; y++, c = 1-c) {
    for (var x = y; x < n -y; x++)
      a[y][x] = a[x][n-1 -y] = a[n-1 -y][n-1 -x] = a[n-1 -x][y] = c
    if (y+ !(n%4) < n/2) a[y+1][y] = 1-c
  }
  return a
}

#4
var spiralize = function(size) {
  const matrix = Array(size).fill().map(_ => Array(size).fill(0));
  let x = 0, y = size - 1;
  for (let n = 0; n < size - 1; n++) {
    for (let i = 1; i < size - (n >> 1) * 2; i++) {
      x += [1, 0, -1, 0][n % 4]; 
      y += [0, -1, 0, 1][n % 4];
      matrix[x][y] = 1;
    }
  }
  return matrix[0].fill(1), matrix;
}
*/
