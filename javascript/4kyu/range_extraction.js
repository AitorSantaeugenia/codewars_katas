/*
### Range Extraction
## A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
Courtesy of rosettacode.org
*/
function solution(list) {
	// TODO: complete solution
	nums = nums.map((v, i) => (nums[i - 1] == v - 1 && nums[i + 1] == v + 1 ? '-' : v));
	return nums.filter((v, i) => v != '-' || nums[i - 1] != '-').join(',').replace(/,-,/g, '-');
}

solution([ -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20 ]); // "-6,-3-1,3-5,7-11,14,15,17-20"
solution([ -10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20 ]); // returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
/*----------------------------------------------------------------
### Other solutions
#1
function solution(list){
   for(var i = 0; i < list.length; i++){
      var j = i;
      while(list[j] - list[j+1] == -1) j++;
      if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
  }
  return list.join();
}

#2
solution = (list)=>list.reduce((acc,curr,i) => {
  if (i==0) return curr.toString();
  if (list[i-1] == curr-1 && list[i+1] == curr+1) return acc;
  if (list[i-2] == curr-2 && list[i-1] == curr-1) return acc+"-"+curr;
  return acc+","+curr;
});

#3
function solution(list){
   return list
     .reduce((acc, n, i, arr) => {
       if(n !== arr[i - 1] + 1) {
         acc.push([n]);
       } else {
         acc[acc.length - 1].push(n);
       }
       return acc;
     }, [])
     .map(arr => arr.length > 2 ? `${arr[0]}-${arr[arr.length-1]}` : arr)
     .join(',');
}

#4
function solution(nums){
 nums = nums.map((v, i) => nums[i - 1] == v - 1 && nums[i + 1] == v + 1 ? '-' : v);
    return nums.filter((v, i) => v != '-' || nums[i - 1] != '-').join(',').replace(/,-,/g, '-');
}
*/
