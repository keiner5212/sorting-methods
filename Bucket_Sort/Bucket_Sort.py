import math


def bucket_sort(arr, num_buckets):
    """
    Sorts a list of numbers using the Bucket Sort algorithm.

    Parameters:
    - arr (list): The list to be sorted.
    - num_buckets (int): The number of buckets to be used in the sorting process.

    Returns:
    - list: A sorted list.
    """
    # Base case: If the list has one or zero elements, it is already sorted
    if len(arr) <= 1:
        return arr

    # Find the minimum and maximum values in the list
    min_val = arr[0]
    max_val = arr[0]
    for i in range(1, len(arr)):
        if arr[i] < min_val:
            min_val = arr[i]
        elif arr[i] > max_val:
            max_val = arr[i]

    # Create buckets based on the range of values
    buckets = [[] for _ in range(num_buckets)]
    for i in range(len(arr)):
        bucket_index = math.floor(
            ((arr[i] - min_val) / (max_val - min_val)) * (num_buckets - 1)
        )
        buckets[bucket_index].append(arr[i])

    # Sort each bucket and concatenate them to form the final sorted list
    output = []
    for bucket in buckets:
        if len(bucket) > 0:
            sorted_bucket = bucket_sort(bucket, len(bucket))
            output += sorted_bucket

    return output


# Example usage
original_arr = [64, 25, 12, 22, 11]
sorted_arr = bucket_sort(original_arr, 4)

print("Original List:", original_arr)
print("Sorted List:", sorted_arr)
