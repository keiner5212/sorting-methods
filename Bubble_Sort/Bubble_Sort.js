/**
 * Sorts an array of numbers using the Bubble Sort algorithm.
 * @param {Array} arr - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
function bubbleSort(arr) {
	var n = arr.length;
	for (var i = 0; i < n - 1; i++) {
		for (var j = 0; j < n - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				// Swap elements if they are in the wrong order
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}

	return arr;
}

// Example usage
var arr = [64, 25, 12, 22, 11];

// Print the original list
console.log("Original List: " + arr);

// Call the bubbleSort function to sort the array
arr = bubbleSort(arr);

// Print the sorted list
console.log("Sorted List: " + arr);
