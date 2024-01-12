#include <iostream>
using namespace std;

/**
 * Function to sort an array using the Bubble Sort algorithm
 * */ 
void bubbleSort(int arr[], int n)
{
    for (int i = 0; i < n - 1; i++)
    {
        // Last i elements are already in their correct places
        for (int j = 0; j < n - i - 1; j++)
        {
            // Compare adjacent elements and swap them if they are in the wrong order
            if (arr[j] > arr[j + 1])
            {
                swap(arr[j], arr[j + 1]);
            }
        }
    }
}

int main()
{
    // Declaration and initialization of an array
    int arr[] = {64, 25, 12, 22, 11};
    int n = sizeof(arr) / sizeof(arr[0]);

    // Print the original list
    cout << "Original List: ";
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    // Call the bubbleSort function to sort the array
    bubbleSort(arr, n);

    // Print the sorted list
    cout << "Sorted List: ";
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }
    cout << endl;

    return 0;
}
