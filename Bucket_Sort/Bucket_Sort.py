import math


def bucket_sort(arr, num_buckets):
    if len(arr) <= 1:
        return arr

    min_val = arr[0]
    max_val = arr[0]

    for i in range(1, len(arr)):
        if arr[i] < min_val:
            min_val = arr[i]
        elif arr[i] > max_val:
            max_val = arr[i]

    buckets = [[] for _ in range(num_buckets)]
    for i in range(len(arr)):
        bucket_index = math.floor(
            ((arr[i] - min_val) / (max_val - min_val)) * (num_buckets - 1))
        buckets[bucket_index].append(arr[i])

    output = []
    for bucket in buckets:
        if len(bucket) > 0:
            sorted_bucket = bucket_sort(bucket, len(bucket))
            output += sorted_bucket

    return output


original_arr = [64, 25, 12, 22, 11]
sorted_arr = bucket_sort(original_arr, 4)

print("Lista original:", original_arr)
print("Lista ordenada:", sorted_arr)
