/**
 * Adjusts the heap rooted at index i to maintain the heap property.
 * @param arr - The array to be heapified.
 * @param n - The size of the heap.
 * @param i - The index of the current root of the heap.
 */
function heapify(arr: number[], n: number, i: number): void {
    let largest = i;
    const l = 2 * i + 1;
    const r = 2 * i + 2;

    // Check if the left child is larger than the root
    if (l < n && arr[l] > arr[largest]) {
        largest = l;
    }

    // Check if the right child is larger than the current largest
    if (r < n && arr[r] > arr[largest]) {
        largest = r;
    }

    // If the largest is not the root, swap and recursively heapify the affected subtree
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

/**
 * Sorts an array using the Heap Sort algorithm.
 * @param arr - The array to be sorted.
 * @returns - A sorted array.
 */
function heapSort(arr: number[]): number[] {
    const n = arr.length;

    // Build the heap (rearrange the array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // One by one extract an element from the heap
    for (let i = n - 1; i >= 0; i--) {
        // Move the current root to the end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }

    return arr;
}

// Example usage of Heap Sort
const arr: number[] = [64, 25, 12, 22, 11];
console.log("Original List: ", arr);
const sortedArr: number[] = heapSort(arr);
console.log("Sorted List: ", sortedArr);
