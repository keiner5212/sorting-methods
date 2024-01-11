package Heap_Sort;

import java.util.Arrays;

public class Heap_Sort {

    /**
     * Sorts an array using the Heap Sort algorithm.
     * 
     * @param arr - The array to be sorted.
     */
    public void sort(int arr[]) {
        int n = arr.length;

        // Build the heap (rearrange the array)
        for (int i = n / 2 - 1; i >= 0; i--) {
            heapify(arr, n, i);
        }

        // One by one extract an element from the heap
        for (int i = n - 1; i > 0; i--) {
            // Move the current root to the end
            int temp = arr[0];
            arr[0] = arr[i];
            arr[i] = temp;

            // Call heapify on the reduced heap
            heapify(arr, i, 0);
        }
    }

    /**
     * Adjusts the heap rooted at index i to maintain the heap property.
     * 
     * @param arr - The array to be heapified.
     * @param n   - The size of the heap.
     * @param i   - The index of the current root of the heap.
     */
    void heapify(int arr[], int n, int i) {
        int largest = i;
        int l = 2 * i + 1;
        int r = 2 * i + 2;

        // Check if the left child is larger than the root
        if (l < n && arr[l] > arr[largest])
            largest = l;

        // Check if the right child is larger than the current largest
        if (r < n && arr[r] > arr[largest])
            largest = r;

        // If the largest is not the root, swap and recursively heapify the affected
        // subtree
        if (largest != i) {
            int swap = arr[i];
            arr[i] = arr[largest];
            arr[largest] = swap;

            heapify(arr, n, largest);
        }
    }

    public static void main(String args[]) {
        // Example usage of Heap Sort
        int arr[] = { 64, 25, 12, 22, 11 };
        System.out.println("Original List: " + Arrays.toString(arr));
        Heap_Sort hs = new Heap_Sort();
        hs.sort(arr);
        System.out.println("Sorted List: " + Arrays.toString(arr));
    }
}
