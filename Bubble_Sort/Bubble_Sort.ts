/**
 * Sorts an array of numbers using the Bubble Sort algorithm.
 * @param arr - The array to be sorted.
 * @returns The sorted array.
 */
function bubbleSort(arr: number[]): number[] {
    const n: number = arr.length;
    for (let i: number = 0; i < n - 1; i++) {
        for (let j: number = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap elements if they are in the wrong order
                const temp: number = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

// Example usage
let arr: number[] = [64, 25, 12, 22, 11];

// Print the original list
console.log("Original List: " + arr);

// Call the bubbleSort function to sort the array
arr = bubbleSort(arr);

// Print the sorted list
console.log("Sorted List: " + arr);
