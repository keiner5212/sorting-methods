/** @format */

function insertionSort(arr) {
	for (let i = 1; i < arr.length; i++) {
		let current = arr[i];
		let j = i - 1;
		while (j >= 0 && arr[j] > current) {
			arr[j + 1] = arr[j];
			j--;
		}
		arr[j + 1] = current;
	}
	return arr;
}

const arr = [64, 25, 12, 22, 11];
console.log("Lista original: " + arr);
const sortedArr = insertionSort(arr);
console.log("Lista ordenada: " + sortedArr);
