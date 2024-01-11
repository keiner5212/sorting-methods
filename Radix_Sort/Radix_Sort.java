package Radix_Sort;

import java.util.Arrays;

/**
 * Class implementing Radix Sort algorithm.
 */
public class Radix_Sort {

    /**
     * Main method to demonstrate Radix Sort on an array of integers.
     * 
     * @param args Command line arguments (not used in this context).
     */
    public static void main(String[] args) {
        int[] arr = { 64, 25, 12, 22, 11 };
        System.out.println("Original array: " + Arrays.toString(arr));
        radixSort(arr);
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }

    /**
     * Radix Sort algorithm implementation for an array of integers.
     * 
     * @param arr The array of integers to be sorted.
     */
    public static void radixSort(int[] arr) {
        final int RADIX = 10; // Base of the number system
        int maxDigitCount = 0;

        // Find the maximum number of digits in the array
        for (int i : arr) {
            int digitCount = 0;
            // Count the number of digits in each element
            while (i > 0) {
                i /= RADIX;
                digitCount++;
            }
            // Update maxDigitCount if a larger count is found
            if (digitCount > maxDigitCount) {
                maxDigitCount = digitCount;
            }
        }

        int placement = 1;

        // Iterate over each digit position
        for (int i = 0; i < maxDigitCount; i++) {
            int[] buckets = new int[RADIX];

            // Distribute elements into buckets based on the current digit
            for (int j : arr) {
                int digit = (j / placement) % RADIX;
                buckets[digit]++;
            }

            // Update bucket counts to represent the end indices after sorting
            for (int j = 1; j < RADIX; j++) {
                buckets[j] += buckets[j - 1];
            }

            // Create a sorted array based on the current digit
            int[] sortedArr = new int[arr.length];
            for (int j = arr.length - 1; j >= 0; j--) {
                int digit = (arr[j] / placement) % RADIX;
                sortedArr[--buckets[digit]] = arr[j];
            }

            // Copy the sorted array back to the original array
            System.arraycopy(sortedArr, 0, arr, 0, arr.length);

            // Move to the next digit position
            placement *= RADIX;
        }
    }
}
