/**
 * Sorts an array of integers using the Counting Sort algorithm.
 * @param {number[]} arr - The array to be sorted.
 * @returns {number[]} - A sorted array.
 */
function countingSort(arr) {
	const max = Math.max(...arr);
	const countArr = Array(max + 1).fill(0);

	// Count the occurrences of each element in the input array
	arr.forEach((num) => countArr[num]++);

	const sortedArr = [];

	// Build the output array using the counting array
	countArr.forEach((count, num) => {
		for (let i = 0; i < count; i++) {
			sortedArr.push(num);
		}
	});

	return sortedArr;
}

// Example usage of Counting Sort
const originalList = [64, 25, 12, 22, 11];
const sortedList = countingSort(originalList);

console.log("Original List:", originalList);
console.log("Sorted List:", sortedList);
