#include <iostream>
#include <algorithm>
using namespace std;

/**
 * Adjusts the heap rooted at index i to maintain the heap property.
 * @param arr - The array to be heapified.
 * @param n - The size of the heap.
 * @param i - The index of the current root of the heap.
 */
void heapify(int arr[], int n, int i)
{
    int largest = i;
    int l = 2 * i + 1;
    int r = 2 * i + 2;

    // Check if the left child is larger than the root
    if (l < n && arr[l] > arr[largest])
        largest = l;

    // Check if the right child is larger than the current largest
    if (r < n && arr[r] > arr[largest])
        largest = r;

    // If the largest is not the root, swap and recursively heapify the affected subtree
    if (largest != i)
    {
        swap(arr[i], arr[largest]);
        heapify(arr, n, largest);
    }
}

/**
 * Sorts an array using the Heap Sort algorithm.
 * @param arr - The array to be sorted.
 * @param n - The size of the array.
 */
void heapSort(int arr[], int n)
{
    // Build the heap (rearrange the array)
    for (int i = n / 2 - 1; i >= 0; i--)
        heapify(arr, n, i);

    // One by one extract an element from the heap
    for (int i = n - 1; i > 0; i--)
    {
        // Move the current root to the end
        swap(arr[0], arr[i]);

        // Call heapify on the reduced heap
        heapify(arr, i, 0);
    }
}

/**
 * Prints the elements of an array.
 * @param arr - The array to be printed.
 * @param n - The size of the array.
 */
void printArray(int arr[], int n)
{
    for (int i = 0; i < n; ++i)
        cout << arr[i] << " ";
    cout << endl;
}

int main()
{
    // Example usage of Heap Sort
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);

    // Print the original array
    cout << "Original List: ";
    printArray(arr, n);

    // Perform Heap Sort
    heapSort(arr, n);

    // Print the sorted array
    cout << "Sorted List: ";
    printArray(arr, n);

    return 0;
}
