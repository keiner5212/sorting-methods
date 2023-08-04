package Counting_Sort;

import java.util.Arrays;

public class Counting_Sort {
    public static void main(String[] args) {
        int[] arr = { 64, 25, 12, 22, 11 };
        System.out.println("Lista original: " + Arrays.toString(arr));
        int[] sortedArr = countingSort(arr);
        System.out.println("Lista ordenada: " + Arrays.toString(sortedArr));
    }

    public static int[] countingSort(int[] arr) {
        int n = arr.length;
        int[] output = new int[n];

        int max = arr[0];
        for (int i = 1; i < n; i++) {
            if (arr[i] > max) {
                max = arr[i];
            }
        }

        int[] count = new int[max + 1];

        for (int i = 0; i < n; i++) {
            count[arr[i]]++;
        }

        for (int i = 1; i <= max; i++) {
            count[i] += count[i - 1];
        }

        for (int i = n - 1; i >= 0; i--) {
            output[count[arr[i]] - 1] = arr[i];
            count[arr[i]]--;
        }

        return output;
    }
}
