/** @format */

function selectionSort(arr) {
	let n = arr.length;
	for (let i = 0; i < n; i++) {
		let min = i;
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		if (min != i) {
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
