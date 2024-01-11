/**
 * Sorts an array using the Insertion Sort algorithm.
 * @param arr - The array to be sorted.
 */
function insertionSort(arr: number[]): void {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than the key to one position ahead of their current position
        while (j >= 0 && key < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }

        arr[j + 1] = key;
    }
}

const arr: number[] = [64, 25, 12, 22, 11];

console.log("Original List:");
console.log(arr);

// Call the insertionSort function to sort the array
insertionSort(arr);

console.log("\nSorted List:");
console.log(arr);
