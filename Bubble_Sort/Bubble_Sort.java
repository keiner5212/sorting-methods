package Bubble_Sort;

public class Bubble_Sort {
    /**
     * Sorts an array of integers using the Bubble Sort algorithm.
     * 
     * @param arr The array to be sorted.
     */
    public static void sort(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (arr[j] > arr[j + 1]) {
                    // Swap elements if they are in the wrong order
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    /**
     * Main function demonstrating the usage of the Bubble Sort algorithm.
     * 
     * @param args Command-line arguments (not used in this case).
     */
    public static void main(String[] args) {
        int[] arr = { 64, 25, 12, 22, 11 };

        // Print the original list
        System.out.print("Original List:\t");
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();

        // Call the sort function to sort the array
        sort(arr);

        // Print the sorted list
        System.out.print("Sorted List:\t");
        for (int i : arr) {
            System.out.print(i + " ");
        }
        System.out.println();
    }
}
