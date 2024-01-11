/**
 * Adjusts the heap rooted at index i to maintain the heap property.
 * @param {number[]} arr - The array to be heapified.
 * @param {number} n - The size of the heap.
 * @param {number} i - The index of the current root of the heap.
 */
function heapify(arr, n, i) {
	let largest = i;
	let l = 2 * i + 1;
	let r = 2 * i + 2;

	// Check if the left child is larger than the root
	if (l < n && arr[l] > arr[largest]) {
		largest = l;
	}

	// Check if the right child is larger than the current largest
	if (r < n && arr[r] > arr[largest]) {
		largest = r;
	}

	// If the largest is not the root, swap and recursively heapify the affected subtree
	if (largest !== i) {
		[arr[i], arr[largest]] = [arr[largest], arr[i]];
		heapify(arr, n, largest);
	}
}

/**
 * Sorts an array using the Heap Sort algorithm.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - A sorted array.
 */
function heapSort(arr) {
	const n = arr.length;

	// Build the heap (rearrange the array)
	for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
		heapify(arr, n, i);
	}

	// One by one extract an element from the heap
	for (let i = n - 1; i >= 0; i--) {
		// Move the current root to the end
		[arr[0], arr[i]] = [arr[i], arr[0]];

		// Call heapify on the reduced heap
		heapify(arr, i, 0);
	}

	return arr;
}

// Example usage of Heap Sort
const arr = [64, 25, 12, 22, 11];
console.log("Original List: ", arr);
const sortedArr = heapSort(arr);
console.log("Sorted List: ", sortedArr);
