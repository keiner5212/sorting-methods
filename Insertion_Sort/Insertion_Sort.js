/**
 * Sorts an array using the Insertion Sort algorithm.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let current = arr[i];
		let j = i - 1;

		// Move elements of arr[0..i-1] that are greater than the key to one position ahead of their current position
		while (j >= 0 && arr[j] > current) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = current;
	}
	return arr;
}

const arr = [64, 25, 12, 22, 11];
console.log("Original List: " + arr);

// Call the insertionSort function to sort the array
const sortedArr = insertionSort(arr);

console.log("Sorted List: " + sortedArr);
