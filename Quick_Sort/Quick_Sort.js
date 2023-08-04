/** @format */

function quickSort(arr) {
	if (arr.length <= 1) {
		return arr;
	} else {
		const pivot = arr[0];
		const left = [];
		const right = [];

		for (let i = 1; i < arr.length; i++) {
			if (arr[i] < pivot) {
				left.push(arr[i]);
			} else {
				right.push(arr[i]);
			}
		}

		return [...quickSort(left), pivot, ...quickSort(right)];
	}
}

const arr = [64, 25, 12, 22, 11];
console.log("Original array:", arr);
console.log("Sorted array:", quickSort(arr));
