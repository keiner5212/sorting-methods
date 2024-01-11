package Counting_Sort;

import java.util.Arrays;

public class Counting_Sort {
    /**
     * Sorts an array of integers using the Counting Sort algorithm.
     * 
     * @param arr - The array to be sorted.
     * @return A sorted array.
     */
    public static int[] countingSort(int[] arr) {
        int n = arr.length;
        int[] output = new int[n];

        // Find the maximum value in the array
        int max = arr[0];
        for (int i = 1; i < n; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        // Create a counting array to store the occurrences of each element
        int[] count = new int[max + 1];

        // Count the occurrences of each element in the input array
        for (int i = 0; i < n; i++) {
            count[arr[i]]++;
        }

        // Update the counting array to store the cumulative count
        for (int i = 1; i <= max; i++) {
            count[i] += count[i - 1];
        }

        // Build the output array using the counting array
        for (int i = n - 1; i >= 0; i--) {
            output[count[arr[i]] - 1] = arr[i];
            count[arr[i]]--;
        }

        return output;
    }

    public static void main(String[] args) {
        // Example usage of Counting Sort
        int[] arr = { 64, 25, 12, 22, 11 };
        System.out.println("Original List: " + Arrays.toString(arr));
        int[] sortedArr = countingSort(arr);
        System.out.println("Sorted List: " + Arrays.toString(sortedArr));
    }
}
