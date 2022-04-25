/* ### Strip Comments

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples
The output expected would be:

apples, pears
grapes
bananas
The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

*/

function solution(input, markers) {
	var arr = input.split('\n');

	for (let i = 0; i < markers.length; i++) {
		arr = arr.map(function(x) {
			let index = x.indexOf(markers[i]);
			if (index !== -1) {
				return x.substring(0, index);
			} else {
				return x.replace(/\s*$/, '');
			}
		});
	}
	return arr.join('\n').trim();
}

/* Other solutions
#1
function solution(input, markers) {
  return input.split('\n').map(
    line => markers.reduce(
      (line, marker) => line.split(marker)[0].trim(), line
    )
  ).join('\n')
}

#2
function solution(input, markers){
  return input.replace(new RegExp("\\s?[" + markers.join("") + "].*(\\n)?", "gi"), "$1");
}

#3
function solution(input, markers){
  return input.replace(new RegExp(`\\s*[${markers.join('|')}].+`,'g'),'');
}

#4
function solution(input, markers)
{
  var lines = input.split("\n");
  for (var i = 0; i < lines.length; ++i)
    for (var j = 0; j < markers.length; ++j)
      lines[i] = lines[i].split(markers[j])[0].trim();
  return lines.join("\n");
}

#5
var i = 0;
function solution(input, markers) {
  return i++ == 0 ? "apples, pears\ngrapes\nbananas" : "a\nc\nd";
};

*/
