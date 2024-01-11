/**
 * selectionSort performs selection sort on the given array.
 * It modifies the array in-place to be sorted in ascending order.
 *
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - The sorted array.
 */
function selectionSort(arr) {
	let n = arr.length;

	// Traverse through all array elements
	for (let i = 0; i < n; i++) {
		// Assume the current index is the minimum
		let min = i;

		// Find the minimum element in the unsorted part of the array
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[min]) {
				// Update the index of the minimum element
				min = j;
			}
		}

		// Swap the found minimum element with the first element if needed
		if (min !== i) {
			let tmp = arr[i];
			arr[i] = arr[min];
			arr[min] = tmp;
		}
	}

	return arr;
}

let arr = [64, 25, 12, 22, 11];
console.log("Original array:", arr);
console.log("Sorted array:", selectionSort(arr));
