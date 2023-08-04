#include <iostream>
#include <vector>
#include <cmath>

using namespace std;

void radix_sort(vector<int> &arr)
{
    const int RADIX = 10;
    int max_digit = 0;
    for (int i : arr)
    {
        int digit_count = 0;
        while (i > 0)
        {
            i /= RADIX;
            digit_count++;
        }
        if (digit_count > max_digit)
        {
            max_digit = digit_count;
        }
    }

    vector<int> buckets[RADIX];
    for (int digit = 0; digit < max_digit; digit++)
    {
        for (int i : arr)
        {
            int bucket_index = (i / static_cast<int>(pow(RADIX, digit))) % RADIX;
            buckets[bucket_index].push_back(i);
        }

        int index = 0;
        for (int bucket_index = 0; bucket_index < RADIX; bucket_index++)
        {
            for (int i : buckets[bucket_index])
            {
                arr[index++] = i;
            }
            buckets[bucket_index].clear();
        }
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
    radix_sort(arr);
    cout << "Sorted array: ";
    for (int i : arr)
    {
        cout << i << " ";
    }
    cout << endl;
}
