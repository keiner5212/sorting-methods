package Selection_Sort;

import java.util.Arrays;

public class Selection_Sort {
    public static void main(String[] args) {
        // Initialize an array
        int[] arr = { 64, 25, 12, 22, 11 };

        // Display the original array
        System.out.println("Original array: " + Arrays.toString(arr));

        // Perform selection sort on the array
        selectionSort(arr);

        // Display the sorted array
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }

    /**
     * selectionSort performs selection sort on the given array.
     * It modifies the array in-place to be sorted in ascending order.
     *
     * @param arr The array to be sorted.
     */
    public static void selectionSort(int[] arr) {
        int n = arr.length;

        // Traverse through all array elements
        for (int i = 0; i < n - 1; i++) {
            // Assume the current index is the minimum
            int min_idx = i;

            // Find the minimum element in the unsorted part of the array
            for (int j = i + 1; j < n; j++) {
                if (arr[j] < arr[min_idx]) {
                    // Update the index of the minimum element
                    min_idx = j;
                }
            }

            // Swap the found minimum element with the first element
            int temp = arr[min_idx];
            arr[min_idx] = arr[i];
            arr[i] = temp;
        }
    }
}
