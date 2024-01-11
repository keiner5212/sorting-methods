#include <iostream>
#include <algorithm>

using namespace std;

/**
 * Sorts an array of integers using the Counting Sort algorithm.
 * @param arr - The array to be sorted.
 * @param n - The size of the array.
 * @param maxVal - The maximum value present in the array.
 */
void countingSort(int arr[], int n, int maxVal)
{
    // Create an output array and a counting array
    int output[n];
    int count[maxVal + 1];

    // Initialize the counting array with zeros
    for (int i = 0; i <= maxVal; i++)
    {
        count[i] = 0;
    }

    // Count the occurrences of each element in the input array
    for (int i = 0; i < n; i++)
    {
        count[arr[i]]++;
    }

    // Update the counting array to store the cumulative count
    for (int i = 1; i <= maxVal; i++)
    {
        count[i] += count[i - 1];
    }

    // Build the output array using the counting array
    for (int i = n - 1; i >= 0; i--)
    {
        output[count[arr[i]] - 1] = arr[i];
        count[arr[i]]--;
    }

    // Copy the sorted elements back to the original array
    for (int i = 0; i < n; i++)
    {
        arr[i] = output[i];
    }
}

int main()
{
    // Example usage of Counting Sort
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);
    int maxVal = *max_element(arr, arr + n);

    // Print the original array
    cout << "Original List: ";
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    // Call Counting Sort to sort the array
    countingSort(arr, n, maxVal);

    // Print the sorted array
    cout << "Sorted List: ";
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}
