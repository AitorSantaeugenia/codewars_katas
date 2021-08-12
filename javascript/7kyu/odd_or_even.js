function oddOrEven(array) {
	//enter code here
	let oddOrEven = array.reduce((accumulator, currentValue) => {
		return accumulator + currentValue;
	}, 0);
	return oddOrEven % 2 == 0 ? 'even' : 'odd';
}
