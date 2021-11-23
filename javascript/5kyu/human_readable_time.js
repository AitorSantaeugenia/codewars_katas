/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/
function humanReadable(seconds) {
	const hour = ('0' + parseInt(seconds / (60 * 60))).slice(-2);
	const min = ('0' + parseInt((seconds / 60) % 60)).slice(-2);
	const sec = ('0' + seconds % 60).slice(-2);
	return hour + ':' + min + ':' + sec;
}

console.log(humanReadable(0)); // '00:00:00', 'humanReadable(0)');
console.log(humanReadable(59)); // '00:00:59', 'humanReadable(59)');
console.log(humanReadable(60)); // '00:01:00', 'humanReadable(60)');
console.log(humanReadable(90)); // '00:01:30', 'humanReadable(90)');
console.log(humanReadable(3599)); // '00:59:59', 'humanReadable(3599)');
console.log(humanReadable(3600)); // '01:00:00', 'humanReadable(3600)');
console.log(humanReadable(45296)); // '12:34:56', 'humanReadable(45296)');
console.log(humanReadable(86399)); // '23:59:59', 'humanReadable(86399)');
console.log(humanReadable(86400)); // '24:00:00', 'humanReadable(86400)');
console.log(humanReadable(359999)); // '99:59:59', 'humanReadable(359999)');

// Other results
/* #1
function humanReadable(seconds) {
  var pad = function(x) { return (x < 10) ? "0"+x : x; }
  return pad(parseInt(seconds / (60*60))) + ":" +
         pad(parseInt(seconds / 60 % 60)) + ":" +
         pad(seconds % 60)
}
*/
/* #2
function humanReadable(seconds) {
var hours = parseInt( seconds / 3600 ) ;
var minutes = parseInt( seconds / 60 ) % 60;
var seconds = seconds % 60;

var pad = function(val){
  return val < 10 ?"0"+val:val;
}

return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
}
*/
/* #3
function humanReadable(seconds) {
  return [seconds / 3600, seconds % 3600 / 60, seconds % 60].map(function(v) {
    v = Math.floor(v).toString();
    return v.length == 1 ? '0' + v : v;
  }).join(':');
}

function humanReadable(seconds) {
  var HH, MM, SS;
  HH = "0" + Math.floor(seconds/3600);
  seconds -= HH * 3600;
  MM = "0" + Math.floor(seconds/60);
  seconds -= MM * 60;
  SS = "0" + seconds;
  return HH.slice(-2) + ":" + MM.slice(-2) + ":" + SS.slice(-2);
}

function humanReadable(seconds) {
  return [(seconds / 3600) | 0, seconds % 3600 / 60, seconds % 3600 % 60].map(n => ('0' + ( '' + n|0)).substr(-2)).join(':')
}
*/
