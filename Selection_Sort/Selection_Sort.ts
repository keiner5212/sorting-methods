/**
 * Perform selection sort on the given array.
 *
 * @param arr - The array to be sorted.
 * @returns The sorted array.
 */
function selectionSort(arr: number[]): number[] {
    const n: number = arr.length;

    // Traverse through all array elements
    for (let i = 0; i < n; i++) {
        // Assume the current index is the minimum
        let minIdx: number = i;

        // Find the minimum element in the unsorted part of the array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                // Update the index of the minimum element
                minIdx = j;
            }
        }

        // Swap the found minimum element with the first element if needed
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }

    return arr;
}

// Example usage
const arr: number[] = [64, 25, 12, 22, 11];
console.log("Original array:", arr);
console.log("Sorted array:", selectionSort(arr));
