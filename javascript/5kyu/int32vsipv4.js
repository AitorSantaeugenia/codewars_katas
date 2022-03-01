/*
### int32 to IPv4
Take the following IPv4 address: 128.32.10.1

This address has 4 octets where each octet is a single byte (or 8 bits).

1st octet 128 has the binary representation: 10000000
2nd octet 32 has the binary representation: 00100000
3rd octet 10 has the binary representation: 00001010
4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001

Because the above IP address has 32 bits, we can represent it as the unsigned 32 bit number: 2149583361

Complete the function that takes an unsigned 32 bit number and returns a string representation of its IPv4 address.

Examples
2149583361 ==> "128.32.10.1"
32         ==> "0.0.0.32"
0          ==> "0.0.0.0"
*/
function int32ToIp(int32) {
	//...
	return int32.toString(2).padStart(32, '0').match(/([01]{8})/g).map((x) => parseInt(x, 2)).join('.');
}

console.log(int32ToIp(2154959208)); //"128.114.17.104", "wrong ip for interger: 2154959208"
console.log(int32ToIp(0)); //'0.0.0.0', 'wrong ip for integer: 0'
console.log(int32ToIp(2149583361)); //'128.32.10.1', 'wrong ip for integer: 2149583361'
/* Other solutions
#1
function int32ToIp(int32){

 return (
          ((int32 >> 24) & 0xFF) + "." +
          ((int32 >> 16) & 0xFF) + "." +
          ((int32 >>  8) & 0xFF) + "." +
          ((int32) & 0xFF)
        );
 
}

#2
function int32ToIp(int32){
    return (int32>>>24) + '.' + (int32<<8>>>24) + '.' + (int32<<16>>>24) + '.' + (int32<<24>>>24)
}

#3
const int32ToIp = ( i => () => [
  '128.114.17.104',
  '0.0.0.0',
  '128.32.10.1',
] [i++] ) ( 0 ) ;

#4
function int32ToIp(int32){
  return [int32 >>> 24, int32 >> 16 & 255, int32 >> 8 & 255, int32 & 255].join('.'); 
}

#5
function int32ToIp(int32){
  var rd4 = Math.floor(int32/(256*256*256))%256;
  var rd3 = Math.floor(int32/(256*256))%256;
  var rd2 = Math.floor(int32/256)%256;
  var rd1 = int32%256;  
  return `${rd4}.${rd3}.${rd2}.${rd1}`;
}
*/
