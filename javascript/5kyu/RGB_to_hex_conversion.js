/* ### RGB To Hex Conversion
## The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

function rgb(r, g, b) {
	// complete this function

	//this better to do as a function, but welp
	if (r <= 0) {
		r = '00';
	}
	if (g <= 0) {
		g = '00';
	}
	if (b <= 0) {
		b = '00';
	}

	if (r > 255) {
		r = 'FF';
	}
	if (g > 255) {
		g = 'FF';
	}
	if (b > 255) {
		b = 'FF';
	}
	let red = r.toString(16).toUpperCase();
	let green = g.toString(16).toUpperCase();
	let blue = b.toString(16).toUpperCase();

	if (red.length < 2) {
		red = '0' + red;
	}
	if (green.length < 2) {
		green = '0' + green;
	}
	if (blue.length < 2) {
		blue = '0' + blue;
	}

	return red + green + blue;
}

console.log(rgb(0, 0, 0)); //'000000'
console.log(rgb(0, 0, -20)); //'000000'
console.log(rgb(300, 255, 255)); //'FFFFFF'
console.log(rgb(173, 255, 47)); //'ADFF2F'
//console errors from codewars
console.log(rgb(89, 21, 12)); //expected 5915C - get 59150C
console.log(rgb(283, 4, 213)); //expected FF4D5 - get FF04D5

/* Other solutions
#1
function rgb(r, g, b){
  return toHex(r)+toHex(g)+toHex(b);
}

function toHex(d) {
    if(d < 0 ) {return "00";}
    if(d > 255 ) {return "FF";}
    return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
}

#2
function rgb(r, g, b){
  return [r,g,b].map(function(x) {
    return ('0'+Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
  }).join('').toUpperCase();
}

#3
function rgb(r, g, b){
  function toHex(a) { 
    if (a <= 0) return '00';
    else if (a >= 255) return 'FF';
    else return a.toString(16).toUpperCase();
  }
  return toHex(r) + toHex(g) + toHex(b);
}
*/
