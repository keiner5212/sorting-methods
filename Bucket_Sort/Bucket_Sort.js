/** @format */

function bucketSort(arr, numBuckets) {
	if (arr.length <= 1) {
		return arr;
	}

	let minVal = arr[0];
	let maxVal = arr[0];

	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < minVal) {
			minVal = arr[i];
		} else if (arr[i] > maxVal) {
			maxVal = arr[i];
		}
	}

	const buckets = new Array(numBuckets);
	for (let i = 0; i < numBuckets; i++) {
		buckets[i] = [];
	}

	for (let i = 0; i < arr.length; i++) {
		const bucketIndex = Math.floor(
			((arr[i] - minVal) * (numBuckets - 1)) / (maxVal - minVal)
		);
		buckets[bucketIndex].push(arr[i]);
	}

	const output = [];
	for (const bucket of buckets) {
		if (bucket.length > 0) {
			const sortedBucket = bucketSort(bucket, bucket.length);
			output.push(...sortedBucket);
		}
	}

	return output;
}

const originalArr = [64, 25, 12, 22, 11];
const sortedArr = bucketSort(originalArr, 4);

console.log("Lista original:", originalArr);
console.log("Lista ordenada:", sortedArr);
