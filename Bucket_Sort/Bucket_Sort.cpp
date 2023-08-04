#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

vector<int> bucketSort(vector<int> arr, int numBuckets)
{
    if (arr.size() <= 1)
    {
        return arr;
    }

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

    vector<vector<int>> buckets(numBuckets);
    for (int i = 0; i < numBuckets; i++)
    {
        buckets[i] = vector<int>();
    }

    for (int i = 0; i < arr.size(); i++)
    {
        int bucketIndex = (int)((double)(arr[i] - minVal) / (maxVal - minVal) * (numBuckets - 1));
        buckets[bucketIndex].push_back(arr[i]);
    }

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
    vector<int> originalArr = {64, 25, 12, 22, 11};
    vector<int> sortedArr = bucketSort(originalArr, 4);

    cout << "Lista original:";
    for (auto i : originalArr)
    {
        cout << " " << i;
    }
    cout << endl;

    cout << "Lista ordenada:";
    for (auto i : sortedArr)
    {
        cout << " " << i;
    }
    cout << endl;

    return 0;
}
