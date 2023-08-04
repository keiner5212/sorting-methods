#include <iostream>
#include <algorithm>
#include <vector>

using namespace std;

void selectionSort(vector<int> &arr)
{
    int n = arr.size();
    for (int i = 0; i < n - 1; i++)
    {
        int min_idx = i;
        for (int j = i + 1; j < n; j++)
        {
            if (arr[j] < arr[min_idx])
            {
                min_idx = j;
            }
        }
        int temp = arr[min_idx];
        arr[min_idx] = arr[i];
        arr[i] = temp;
    }
}

int main()
{
    vector<int> arr = {64, 25, 12, 22, 11};
    cout << "Original array: ";
    for (int i : arr)
    {
        cout << i << " ";
    }
    cout << endl;
    selectionSort(arr);
    cout << "Sorted array: ";
    for (int i : arr)
    {
        cout << i << " ";
    }
    cout << endl;
}
