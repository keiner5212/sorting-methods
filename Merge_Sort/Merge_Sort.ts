
/**
 * Recursive function to sort an array using merge sort.
 * @param arr - The array to be sorted.
 * @returns The sorted array.
 */
function mergeSort(arr: number[]): number[] {
    // Base case: If the array has 1 or fewer elements, it is already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Find the middle index of the array
    const mid = Math.floor(arr.length / 2);

    // Split the array into left and right halves
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    // Recursively sort the left and right halves and merge them
    return merge(mergeSort(left), mergeSort(right));
}

/**
 * Merge two sorted arrays into a single sorted array.
 * @param left - The left sorted array.
 * @param right - The right sorted array.
 * @returns The merged and sorted array.
 */
function merge(left: number[], right: number[]): number[] {
    const result: number[] = [];
    let i = 0;
    let j = 0;

    // Compare elements from left and right arrays and merge them
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Concatenate the remaining elements from left and right arrays
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage
const arr: number[] = [64, 25, 12, 22, 11];
console.log("Original List:");
console.log(arr);

// Call the mergeSort function to sort the array
const sortedArr: number[] = mergeSort(arr);

console.log("\nSorted List:");
console.log(sortedArr);
