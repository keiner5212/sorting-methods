#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

// selectionSort performs selection sort on the given vector.
// It modifies the vector in-place to be sorted in ascending order.
void selectionSort(vector<int> &arr)
{
    int n = arr.size();

    // Traverse through all array elements
    for (int i = 0; i < n - 1; i++)
    {
        // Find the minimum element in unsorted part of the array
        int min_idx = i;
        for (int j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[min_idx])
            {
                min_idx = j;
            }
        }

        // Swap the found minimum element with the first element
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

int main()
{
    // Initialize an array
    vector<int> arr = {64, 25, 12, 22, 11};

    // Display the original array
    cout << "Original array: ";
    for (int i : arr)
    {
        cout << i << " ";
    }
    cout << endl;

    // Perform selection sort on the array
    selectionSort(arr);

    // Display the sorted array
    cout << "Sorted array: ";
    for (int i : arr)
    {
        cout << i << " ";
    }
    cout << endl;

    return 0;
}
