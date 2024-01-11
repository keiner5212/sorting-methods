package Bucket_Sort;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class Bucket_Sort {
    /**
     * Sorts an array of integers using the Bucket Sort algorithm.
     * 
     * @param arr        The array to be sorted.
     * @param numBuckets The number of buckets to be used in the sorting process.
     * @return A sorted array.
     */
    public static int[] bucketSort(int[] arr, int numBuckets) {
        // Base case: If the array has one or zero elements, it is already sorted
        if (arr.length <= 1) {
            return arr;
        }

        // Find the minimum and maximum values in the array
        int minVal = arr[0];
        int maxVal = arr[0];
        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < minVal) {
                minVal = arr[i];
            } else if (arr[i] > maxVal) {
                maxVal = arr[i];
            }
        }

        // Create buckets based on the range of values
        List<List<Integer>> buckets = new ArrayList<>();
        for (int i = 0; i < numBuckets; i++) {
            buckets.add(new LinkedList<>());
        }

        // Distribute elements into buckets
        for (int i = 0; i < arr.length; i++) {
            int bucketIndex = (int) ((arr[i] - minVal) * (numBuckets - 1) / (maxVal - minVal));
            buckets.get(bucketIndex).add(arr[i]);
        }

        // Sort each bucket and concatenate them to form the final sorted array
        int[] output = new int[arr.length];
        int outputIndex = 0;

        for (List<Integer> bucket : buckets) {
            if (!bucket.isEmpty()) {
                int[] bucketArray = new int[bucket.size()];
                for (int i = 0; i < bucket.size(); i++) {
                    bucketArray[i] = bucket.get(i);
                }
                int[] sortedBucket = bucketSort(bucketArray, bucketArray.length);
                for (int i = 0; i < sortedBucket.length; i++) {
                    output[outputIndex++] = sortedBucket[i];
                }
            }
        }

        return output;
    }

    public static void main(String[] args) {
        // Example usage of Bucket Sort
        int[] arr = { 64, 25, 12, 22, 11 };
        System.out.println("Original List: " + Arrays.toString(arr));
        int[] sortedArr = bucketSort(arr, 4);
        System.out.println("Sorted List: " + Arrays.toString(sortedArr));
    }
}
