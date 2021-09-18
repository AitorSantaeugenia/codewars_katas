/*
Story
Due to lack of maintenance the minute-hand has fallen off Town Hall clock face.

And because the local council has lost most of our tax money to a Nigerian email scam there are no funds to fix the clock properly.

Instead, they are asking for volunteer programmers to write some code that tell the time by only looking at the remaining hour-hand!

What a bunch of cheapskates!

Can you do it?

Kata
Given the angle (in degrees) of the hour-hand, return the time in HH:MM format. Round down to the nearest minute.

Examples
12:00 = 0 degrees
03:00 = 90 degrees
06:00 = 180 degrees
09:00 = 270 degrees
12:00 = 360 degrees
Notes
0 <= angle <= 360
*/

var whatTimeIsIt = function(angle) {
	// Your code here
	//12:00 = 0 degrees
	//03:00 = 90 degrees
	//06:00 = 180 degrees
	//09:00 = 270 degrees
	//12:00 = 360 degrees

	//90 = 3 h
	let hour = Math.floor(angle / 30);
	let min = Math.floor((angle % 30) * 2);
	//console.log(min);

	//Al hacer string, 12 nos pone 012 y 0 ha de ser 12, cambiamos behaviour con un pequeño string
	if (hour === 0) {
		hour = 12;
	} else if (hour === 12) {
		hour = hour;
	} else {
		hour = '0' + hour;
	}

	min = String(min);
	//console.log(min);
	//console.log(min.length);

	if (min.length === 2) {
		min = min;
	} else {
		min = '0' + min;
	}

	hour = String(hour);

	if (hour.length > 2) {
		console.log(hour);
		hour = hour.slice(1);
		console.log(hour);
	}

	//return min.length
	return hour + ':' + min;

	//return "12:00";
};

console.log(whatTimeIsIt(333.1041125010748));
