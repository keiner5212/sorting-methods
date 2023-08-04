package Bucket_Sort;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class Bucket_Sort {
    public static void main(String[] args) {
        int[] arr = { 64, 25, 12, 22, 11 };
        System.out.println("Lista original: " + Arrays.toString(arr));
        int[] sortedArr = bucketSort(arr, 4);
        System.out.println("Lista ordenada: " + Arrays.toString(sortedArr));
    }

    public static int[] bucketSort(int[] arr, int numBuckets) {
        if (arr.length <= 1) {
            return arr;
        }

        int minVal = arr[0];
        int maxVal = arr[0];

        for (int i = 1; i < arr.length; i++) {
            if (arr[i] < minVal) {
                minVal = arr[i];
            } else if (arr[i] > maxVal) {
                maxVal = arr[i];
            }
        }

        List<List<Integer>> buckets = new ArrayList<>();
        
        for (int i = 0; i < numBuckets; i++) {
            buckets.add(new LinkedList<>());
        }

        for (int i = 0; i < arr.length; i++) {
            int bucketIndex = (int) ((arr[i] - minVal) * (numBuckets - 1) / (maxVal - minVal));
            buckets.get(bucketIndex).add(arr[i]);
        }

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
}
