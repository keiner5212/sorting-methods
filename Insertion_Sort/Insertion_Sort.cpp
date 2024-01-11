#include <iostream>
using namespace std;

/**
 * Sorts an array using the Insertion Sort algorithm.
 * @param arr - The array to be sorted.
 * @param n - The size of the array.
 */
void insertionSort(int arr[], int n)
{
    int j, key;
    for (int i = 1; i < n; i++)
    {
        key = arr[i];
        j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key to one position ahead of their current position
        while (j >= 0 && arr[j] > key)
        {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
}

/**
 * Prints the elements of an array.
 * @param arr - The array to be printed.
 * @param n - The size of the array.
 */
void printArray(int arr[], int n)
{
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

int main()
{
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);

    cout << "Original List: ";
    printArray(arr, n);

    insertionSort(arr, n);

    cout << "Sorted List: ";
    printArray(arr, n);

    return 0;
}
