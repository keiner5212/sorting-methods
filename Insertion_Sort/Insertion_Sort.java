package Insertion_Sort;

import java.util.Arrays;

public class Insertion_Sort {

    /**
     * Sorts an array using the Insertion Sort algorithm.
     * 
     * @param arr - The array to be sorted.
     */
    public static void insertionSort(int[] arr) {
        int n = arr.length;
        for (int i = 1; i < n; ++i) {
            int key = arr[i];
            int j = i - 1;

            // Move elements of arr[0..i-1] that are greater than key to one position ahead
            // of their current position
            while (j >= 0 && arr[j] > key) {
                arr[j + 1] = arr[j];
                j = j - 1;
            }
            arr[j + 1] = key;
        }
    }

    public static void main(String[] args) {
        int[] arr = { 64, 25, 12, 22, 11 };
        System.out.println("Original array: " + Arrays.toString(arr));

        // Call the insertionSort function to sort the array
        insertionSort(arr);

        System.out.println("Sorted array: " + Arrays.toString(arr));
    }
}
