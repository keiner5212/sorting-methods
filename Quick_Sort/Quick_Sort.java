package Quick_Sort;

/**
 * Implementation of the Quick Sort algorithm in Java.
 */
public class Quick_Sort {
    /**
     * Main function to demonstrate Quick Sort on an array.
     *
     * @param args Command line arguments (not used).
     */
    public static void main(String[] args) {
        int[] arr = { 64, 25, 12, 22, 11 };
        System.out.print("Original array: ");
        printArray(arr);
        quickSort(arr, 0, arr.length - 1);

        System.out.print("Sorted array: ");
        printArray(arr);
    }

    /**
     * Recursive function to perform Quick Sort on the array.
     *
     * @param arr  The input array to be sorted.
     * @param low  The starting index of the subarray.
     * @param high The ending index of the subarray.
     */
    public static void quickSort(int[] arr, int low, int high) {
        if (low < high) {
            // Find the partition index
            int partitionIndex = partition(arr, low, high);

            // Recursively sort the subarrays
            quickSort(arr, low, partitionIndex - 1);
            quickSort(arr, partitionIndex + 1, high);
        }
    }

    /**
     * Helper function to find the partition index.
     *
     * @param arr  The input array.
     * @param low  The starting index of the subarray.
     * @param high The ending index of the subarray.
     * @return The partition index.
     */
    public static int partition(int[] arr, int low, int high) {
        // Choose the pivot (last element in this case)
        int pivot = arr[high];
        int i = low - 1;

        // Traverse the array and rearrange elements
        for (int j = low; j < high; j++) {
            if (arr[j] < pivot) {
                i++;
                // Swap arr[i] and arr[j]
                int temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }

        // Swap arr[i+1] and arr[high] to place pivot in the correct position
        int temp = arr[i + 1];
        arr[i + 1] = arr[high];
        arr[high] = temp;

        return i + 1; // Return the partition index
    }

    /**
     * Helper function to print an array.
     *
     * @param arr The array to be printed.
     */
    public static void printArray(int[] arr) {
        for (int num : arr) {
            System.out.print(num + " ");
        }
        System.out.println();
    }
}
