#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

/**
 * Bucket Sort implementation to sort a vector of integers.
 * @param arr The vector to be sorted.
 * @param numBuckets The number of buckets to be used in the sorting process.
 * @return A sorted vector.
 */
vector<int> bucketSort(vector<int> arr, int numBuckets)
{
    // Base case: If the vector has one or zero elements, it is already sorted
    if (arr.size() <= 1)
    {
        return arr;
    }

    // Find the minimum and maximum values in the vector
    int minVal = arr[0];
    int maxVal = arr[0];
    for (int i = 1; i < arr.size(); i++)
    {
        if (arr[i] < minVal)
        {
            minVal = arr[i];
        }
        else if (arr[i] > maxVal)
        {
            maxVal = arr[i];
        }
    }

    // Create buckets based on the range of values
    vector<vector<int>> buckets(numBuckets);
    for (int i = 0; i < numBuckets; i++)
    {
        buckets[i] = vector<int>();
    }

    // Distribute elements into buckets
    for (int i = 0; i < arr.size(); i++)
    {
        int bucketIndex = (int)((double)(arr[i] - minVal) / (maxVal - minVal) * (numBuckets - 1));
        buckets[bucketIndex].push_back(arr[i]);
    }

    // Sort each bucket and concatenate them to form the final sorted vector
    vector<int> output;
    for (auto bucket : buckets)
    {
        if (bucket.size() > 0)
        {
            vector<int> sortedBucket = bucketSort(bucket, bucket.size());
            output.insert(output.end(), sortedBucket.begin(), sortedBucket.end());
        }
    }

    return output;
}

int main()
{
    // Example usage of Bucket Sort
    vector<int> originalArr = {64, 25, 12, 22, 11};
    vector<int> sortedArr = bucketSort(originalArr, 4);

    // Print the original vector
    cout << "Original List:";
    for (auto i : originalArr)
    {
        cout << " " << i;
    }
    cout << endl;

    // Print the sorted vector
    cout << "Sorted List:";
    for (auto i : sortedArr)
    {
        cout << " " << i;
    }
    cout << endl;

    return 0;
}
