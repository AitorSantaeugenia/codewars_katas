//  ### Hex to base64
//This kata is not finished cos line #12

// Convert hex-encoded (https://en.wikipedia.org/wiki/Hexadecimal) string to base64 (https://en.wikipedia.org/wiki/Base64)
// Example:
// The string:
// 49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d

// Should produce:
// SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t

//btoa() not working on codewars, so gl

const hexToBase64 = (hex) => {
	// your perfect code ... return hex;
	return btoa(String.fromCharCode(...hex.match(/.{2}/g).map((c) => parseInt(c, 16))));
};

console.log(
	hexToBase64('49276d206b696c6c696e6720796f757220627261696e206c696b65206120706f69736f6e6f7573206d757368726f6f6d')
);
//'SSdtIGtpbGxpbmcgeW91ciBicmFpbiBsaWtlIGEgcG9pc29ub3VzIG11c2hyb29t'

/* Other solutions
-----------------------------

*/
