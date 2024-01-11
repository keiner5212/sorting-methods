/**
 * Sorts an array of integers using the Counting Sort algorithm.
 * @param arr - The array to be sorted.
 * @returns A sorted array.
 */
function countingSort(arr: number[]): number[] {
    const max = Math.max(...arr);
    const countArr: number[] = Array(max + 1).fill(0);

    // Count the occurrences of each element in the input array
    arr.forEach((num) => countArr[num]++);

    const sortedArr: number[] = [];

    // Build the output array using the counting array
    countArr.forEach((count, num) => {
        for (let i = 0; i < count; i++) {
            sortedArr.push(num);
        }
    });

    return sortedArr;
}

// Example usage of Counting Sort
const originalList: number[] = [64, 25, 12, 22, 11];
const sortedList: number[] = countingSort(originalList);

console.log("Original List:", originalList);
console.log("Sorted List:", sortedList);
