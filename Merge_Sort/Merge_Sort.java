package Merge_Sort;

public class Merge_Sort {

    /**
     * Merge two subarrays of arr[].
     * First subarray is arr[left..mid]
     * Second subarray is arr[mid+1..right]
     */
    public void merge(int arr[], int left, int mid, int right) {

        int n1 = mid - left + 1;
        int n2 = right - mid;

        // Create temporary arrays
        int leftArr[] = new int[n1];
        int rightArr[] = new int[n2];

        // Copy data to temporary arrays
        for (int i = 0; i < n1; ++i)
            leftArr[i] = arr[left + i];

        for (int j = 0; j < n2; ++j)
            rightArr[j] = arr[mid + 1 + j];

        // Merge the temporary arrays back into arr[left..right]
        int i = 0, j = 0, k = left;
        while (i < n1 && j < n2) {
            if (leftArr[i] <= rightArr[j]) {
                arr[k] = leftArr[i];
                i++;
            } else {
                arr[k] = rightArr[j];
                j++;
            }
            k++;
        }

        // Copy the remaining elements of leftArr[], if there are any
        while (i < n1) {
            arr[k] = leftArr[i];
            i++;
            k++;
        }

        // Copy the remaining elements of rightArr[], if there are any
        while (j < n2) {
            arr[k] = rightArr[j];
            j++;
            k++;
        }
    }

    /**
     * Recursive function to sort an array using merge sort.
     */
    public void sort(int arr[], int left, int right) {
        if (left < right) {
            // Same as (left+right)/2, but avoids overflow for large left and right
            int mid = left + (right - left) / 2;

            // Sort first and second halves
            sort(arr, left, mid);
            sort(arr, mid + 1, right);

            // Merge the sorted halves
            merge(arr, left, mid, right);
        }
    }

    /**
     * Main function to demonstrate Merge Sort.
     */
    public static void main(String args[]) {

        int arr[] = { 64, 25, 12, 22, 11 };

        Merge_Sort obj = new Merge_Sort();

        System.out.println("Original List:");

        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }

        // Call the sort method to sort the array
        obj.sort(arr, 0, arr.length - 1);

        System.out.println("\nSorted List:");

        for (int i = 0; i < arr.length; i++) {
            System.out.print(arr[i] + " ");
        }
    }
}
