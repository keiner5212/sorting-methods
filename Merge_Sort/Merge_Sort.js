/** @format */

function mergeSort(arr) {
	if (arr.length <= 1) {
		return arr;
	}
	const mid = Math.floor(arr.length / 2);
	const left = arr.slice(0, mid);
	const right = arr.slice(mid);
	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
	const result = [];
	let i = 0;
	let j = 0;
	while (i < left.length && j < right.length) {
		if (left[i] < right[j]) {
			result.push(left[i]);
			i++;
		} else {
			result.push(right[j]);
			j++;
		}
	}
	return result.concat(left.slice(i)).concat(right.slice(j));
}

const arr = [64, 25, 12, 22, 11];
console.log("Lista original:");
console.log(arr);

const sortedArr = mergeSort(arr);

console.log("\nLista ordenada:");
console.log(sortedArr);
