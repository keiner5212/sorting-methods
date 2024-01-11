#include <iostream>
using namespace std;

// Function to print elements of an array
void printArray(int arr[], int size)
{
    for (int i = 0; i < size; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;
}

// Function to partition the array and return the index of the pivot
int partition(int arr[], int low, int high)
{
    // Choose the last element as the pivot
    int pivot = arr[high];
    int i = low - 1; // Index of the smaller element

    // Traverse through all elements
    for (int j = low; j < high; j++)
    {
        // If the current element is smaller than or equal to the pivot
        if (arr[j] < pivot)
        {
            // Swap arr[i] and arr[j]
            i++;
            swap(arr[i], arr[j]);
        }
    }

    // Swap arr[i+1] and arr[high] to place the pivot in its correct position
    swap(arr[i + 1], arr[high]);
    return i + 1; // Return the index of the pivot
}

// Function to implement the Quick Sort algorithm
void quickSort(int arr[], int low, int high)
{
    if (low < high)
    {
        // Find the partitioning index
        int partitionIndex = partition(arr, low, high);

        // Recursively sort the sub-arrays before and after the partition
        quickSort(arr, low, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, high);
    }
}

int main()
{
    int arr[] = {64, 25, 12, 22, 11};
    int size = sizeof(arr) / sizeof(arr[0]);

    // Print the original array
    cout << "Original array: ";
    printArray(arr, size);

    // Perform Quick Sort
    quickSort(arr, 0, size - 1);

    // Print the sorted array
    cout << "Sorted array: ";
    printArray(arr, size);

    return 0;
}
