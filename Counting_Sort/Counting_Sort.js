/** @format */

function countingSort(arr) {
	const max = Math.max(...arr);
	const countArr = Array(max + 1).fill(0);

	arr.forEach((num) => countArr[num]++);

	const sortedArr = [];
	countArr.forEach((count, num) => {
		for (let i = 0; i < count; i++) {
			sortedArr.push(num);
		}
	});

	return sortedArr;
}

const originalList = [64, 25, 12, 22, 11];
const sortedList = countingSort(originalList);

console.log("Lista original:", originalList);
console.log("Lista ordenada:", sortedList);
