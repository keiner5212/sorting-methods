#include <iostream>
using namespace std;

/**
 * Merge two subarrays of arr[].
 * First subarray is arr[l..m]
 * Second subarray is arr[m+1..r]
 */
void merge(int arr[], int l, int m, int r)
{
    int n1 = m - l + 1;
    int n2 = r - m;

    // Create temporary arrays
    int L[n1], R[n2];

    // Copy data to temporary arrays L[] and R[]
    for (int i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (int j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];

    // Merge the temporary arrays back into arr[l..r]
    int i = 0, j = 0, k = l;
    while (i < n1 && j < n2)
    {
        if (L[i] <= R[j])
        {
            arr[k] = L[i];
            i++;
        }
        else
        {
            arr[k] = R[j];
            j++;
        }
        k++;
    }

    // Copy the remaining elements of L[], if there are any
    while (i < n1)
    {
        arr[k] = L[i];
        i++;
        k++;
    }

    // Copy the remaining elements of R[], if there are any
    while (j < n2)
    {
        arr[k] = R[j];
        j++;
        k++;
    }
}

/**
 * Merge sort function to recursively divide and merge an array.
 */
void mergeSort(int arr[], int l, int r)
{
    if (l < r)
    {
        // Same as (l+r)/2, but avoids overflow for large l and r
        int m = l + (r - l) / 2;

        // Sort first and second halves
        mergeSort(arr, l, m);
        mergeSort(arr, m + 1, r);

        // Merge the sorted halves
        merge(arr, l, m, r);
    }
}

/**
 * Utility function to print an array.
 */
void printArray(int arr[], int size)
{
    for (int i = 0; i < size; i++)
        cout << arr[i] << " ";
    cout << endl;
}

/**
 * Main function to demonstrate Merge Sort.
 */
int main()
{
    int arr[] = {64, 25, 12, 22, 11};
    int arr_size = sizeof(arr) / sizeof(arr[0]);

    cout << "Original List:\n";
    printArray(arr, arr_size);

    // Call the mergeSort function to sort the array
    mergeSort(arr, 0, arr_size - 1);

    cout << "\nSorted List:\n";
    printArray(arr, arr_size);

    return 0;
}
