/**
 * Implementation of the Quick Sort algorithm in TypeScript.
 *
 * @param arr - The input array to be sorted.
 * @returns The sorted array.
 */
function quickSort(arr: number[]): number[] {
    // Base case: if the array has 1 or 0 elements, it is already sorted
    if (arr.length <= 1) {
        return arr;
    } else {
        // Choose the pivot (first element in this case)
        const pivot: number = arr[0];
        const left: number[] = [];
        const right: number[] = [];

        // Partition the array into elements less than pivot and greater than pivot
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        // Recursively sort the left and right subarrays and concatenate them around the pivot
        return [...quickSort(left), pivot, ...quickSort(right)];
    }
}

// Example usage
const arr: number[] = [64, 25, 12, 22, 11];
console.log("Original array:", arr);
console.log("Sorted array:", quickSort(arr));
