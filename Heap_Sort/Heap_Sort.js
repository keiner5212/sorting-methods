/** @format */

function heapify(arr, n, i) {
	let largest = i;
	let l = 2 * i + 1;
	let r = 2 * i + 2;

	if (l < n && arr[l] > arr[largest]) {
		largest = l;
	}

	if (r < n && arr[r] > arr[largest]) {
		largest = r;
	}

	if (largest !== i) {
		[arr[i], arr[largest]] = [arr[largest], arr[i]];
		heapify(arr, n, largest);
	}
}

function heapSort(arr) {
	const n = arr.length;

	for (let i = parseInt(n / 2 - 1); i >= 0; i--) {
		heapify(arr, n, i);
	}

	for (let i = n - 1; i >= 0; i--) {
		[arr[0], arr[i]] = [arr[i], arr[0]];
		heapify(arr, i, 0);
	}

	return arr;
}

const arr = [64, 25, 12, 22, 11];
console.log("Lista original: ", arr);
const sortedArr = heapSort(arr);
console.log("Lista ordenada: ", sortedArr);
