#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

// Function to perform Radix Sort on an array
void radix_sort(vector<int> &arr)
{
    const int RADIX = 10;
    int max_digit = 0;

    // Find the maximum number of digits in the array
    for (int i : arr)
    {
        int digit_count = 0;
        // Count the number of digits in each element
        while (i > 0)
        {
            i /= RADIX;
            digit_count++;
        }
        // Update max_digit if a larger count is found
        if (digit_count > max_digit)
        {
            max_digit = digit_count;
        }
    }

    // Create an array of buckets
    vector<int> buckets[RADIX];

    // Iterate over each digit position
    for (int digit = 0; digit < max_digit; digit++)
    {
        // Distribute elements into buckets based on the current digit
        for (int i : arr)
        {
            int bucket_index = (i / static_cast<int>(pow(RADIX, digit))) % RADIX;
            buckets[bucket_index].push_back(i);
        }

        // Reassemble the array from the buckets
        int index = 0;
        for (int bucket_index = 0; bucket_index < RADIX; bucket_index++)
        {
            for (int i : buckets[bucket_index])
            {
                arr[index++] = i;
            }
            // Clear the bucket for the next iteration
            buckets[bucket_index].clear();
        }
    }
}

int main()
{
    // Example usage of Radix Sort
    vector<int> arr = {64, 25, 12, 22, 11};

    // Display the original array
    cout << "Original array: ";
    for (int i : arr)
    {
        cout << i << " ";
    }
    cout << endl;

    // Perform Radix Sort on the array
    radix_sort(arr);

    // Display the sorted array
    cout << "Sorted array: ";
    for (int i : arr)
    {
        cout << i << " ";
    }
    cout << endl;

    return 0;
}
