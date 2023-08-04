/** @format */

function radixSort(arr) {
	const RADIX = 10;
	let maxDigitCount = 0;
	for (let i of arr) {
		let digitCount = 0;
		while (i > 0) {
			i = Math.floor(i / RADIX);
			digitCount++;
		}
		if (digitCount > maxDigitCount) {
			maxDigitCount = digitCount;
		}
	}

	for (let k = 0; k < maxDigitCount; k++) {
		let digitBuckets = Array.from({ length: RADIX }, () => []);
		for (let i of arr) {
			let digit = getDigit(i, k);
			digitBuckets[digit].push(i);
		}
		arr = [].concat(...digitBuckets);
	}

	return arr;
}

function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

let arr = [64, 25, 12, 22, 11];
console.log("Original array:", arr);
console.log("Sorted array:", radixSort(arr));
