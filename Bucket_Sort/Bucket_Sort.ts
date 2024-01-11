function bucketSort(arr: number[], numBuckets: number): number[] {
    /**
     * Sorts a list of numbers using the Bucket Sort algorithm.
     * @param arr - The list to be sorted.
     * @param numBuckets - The number of buckets to be used in the sorting process.
     * @returns A sorted list.
     */
    // Base case: If the list has one or zero elements, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Find the minimum and maximum values in the list
    let minVal: number = arr[0];
    let maxVal: number = arr[0];
    for (let i: number = 1; i < arr.length; i++) {
        if (arr[i] < minVal) {
            minVal = arr[i];
        } else if (arr[i] > maxVal) {
            maxVal = arr[i];
        }
    }

    // Create buckets based on the range of values
    const buckets: number[][] = Array.from({ length: numBuckets }, () => []);
    for (let i: number = 0; i < arr.length; i++) {
        const bucketIndex: number = Math.floor(
            ((arr[i] - minVal) / (maxVal - minVal)) * (numBuckets - 1)
        );
        buckets[bucketIndex].push(arr[i]);
    }

    // Sort each bucket and concatenate them to form the final sorted list
    let output: number[] = [];
    for (const bucket of buckets) {
        if (bucket.length > 0) {
            const sortedBucket: number[] = bucketSort(bucket, bucket.length);
            output = output.concat(sortedBucket);
        }
    }

    return output;
}

// Example usage
const originalArr: number[] = [64, 25, 12, 22, 11];
const sortedArr: number[] = bucketSort(originalArr, 4);

console.log("Original List:", originalArr);
console.log("Sorted List:", sortedArr);
