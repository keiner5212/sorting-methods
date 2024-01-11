/**
 * Sorts an array of numbers using the Bucket Sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @param {number} numBuckets - The number of buckets to be used in the sorting process.
 * @returns {Array} - A sorted array.
 */
function bucketSort(arr, numBuckets) {
	// Base case: If the array has one or zero elements, it is already sorted
	if (arr.length <= 1) {
		return arr;
	}

	// Find the minimum and maximum values in the array
	let minVal = arr[0];
	let maxVal = arr[0];
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < minVal) {
			minVal = arr[i];
		} else if (arr[i] > maxVal) {
			maxVal = arr[i];
		}
	}

	// Create buckets based on the range of values
	const buckets = new Array(numBuckets);
	for (let i = 0; i < numBuckets; i++) {
		buckets[i] = [];
	}

	// Distribute elements into buckets
	for (let i = 0; i < arr.length; i++) {
		const bucketIndex = Math.floor(
			((arr[i] - minVal) * (numBuckets - 1)) / (maxVal - minVal)
		);
		buckets[bucketIndex].push(arr[i]);
	}

	// Sort each bucket and concatenate them to form the final sorted array
	const output = [];
	for (const bucket of buckets) {
		if (bucket.length > 0) {
			const sortedBucket = bucketSort(bucket, bucket.length);
			output.push(...sortedBucket);
		}
	}

	return output;
}

// Example usage
const originalArr = [64, 25, 12, 22, 11];
const sortedArr = bucketSort(originalArr, 4);

console.log("Original List:", originalArr);
console.log("Sorted List:", sortedArr);
