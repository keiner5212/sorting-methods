package Radix_Sort;

import java.util.Arrays;

public class Radix_Sort {
    public static void main(String[] args) {
        int[] arr = { 64, 25, 12, 22, 11 };
        System.out.println("Original array: " + Arrays.toString(arr));
        radixSort(arr);
        System.out.println("Sorted array: " + Arrays.toString(arr));
    }

    public static void radixSort(int[] arr) {
        final int RADIX = 10;
        int maxDigitCount = 0;
        for (int i : arr) {
            int digitCount = 0;
            while (i > 0) {
                i /= RADIX;
                digitCount++;
            }
            if (digitCount > maxDigitCount) {
                maxDigitCount = digitCount;
            }
        }

        int placement = 1;
        for (int i = 0; i < maxDigitCount; i++) {
            int[] buckets = new int[RADIX];
            for (int j : arr) {
                int digit = (j / placement) % RADIX;
                buckets[digit]++;
            }

            for (int j = 1; j < RADIX; j++) {
                buckets[j] += buckets[j - 1];
            }

            int[] sortedArr = new int[arr.length];
            for (int j = arr.length - 1; j >= 0; j--) {
                int digit = (arr[j] / placement) % RADIX;
                sortedArr[--buckets[digit]] = arr[j];
            }

            System.arraycopy(sortedArr, 0, arr, 0, arr.length);
            placement *= RADIX;
        }
    }
}
