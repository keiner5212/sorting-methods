/**
 * Sorts an array of integers using the Radix Sort algorithm.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function radixSort(arr) {
	const RADIX = 10;
	let maxDigitCount = 0;

	// Find the maximum number of digits in the array
	for (let i of arr) {
		let digitCount = 0;

		// Count the number of digits in each element
		while (i > 0) {
			i = Math.floor(i / RADIX);
			digitCount++;
		}

		// Update maxDigitCount if a larger count is found
		if (digitCount > maxDigitCount) {
			maxDigitCount = digitCount;
		}
	}

	// Iterate over each digit position
	for (let k = 0; k < maxDigitCount; k++) {
		// Create buckets for each digit (0-9)
		let digitBuckets = Array.from({ length: RADIX }, () => []);

		// Distribute elements into buckets based on the current digit
		for (let i of arr) {
			let digit = getDigit(i, k);
			digitBuckets[digit].push(i);
		}

		// Concatenate the buckets to form the partially sorted array
		arr = [].concat(...digitBuckets);
	}

	return arr;
}

/**
 * Gets the digit at a specified position in a number.
 * @param {number} num - The number from which to extract the digit.
 * @param {number} i - The position of the digit (0 for units, 1 for tens, etc.).
 * @returns {number} - The digit at the specified position.
 */
function getDigit(num, i) {
	return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// Example usage
let arr = [64, 25, 12, 22, 11];
console.log("Original array:", arr);
console.log("Sorted array:", radixSort(arr));
