def counting_sort(arr):
    """
    Sorts a list of integers using the Counting Sort algorithm.

    Parameters:
    - arr (list): The list to be sorted.

    Returns:
    - list: A sorted list.
    """
    max_value = max(arr)
    count_arr = [0] * (max_value + 1)

    # Count the occurrences of each element in the input list
    for num in arr:
        count_arr[num] += 1

    sorted_arr = []

    # Build the output list using the counting array
    for i in range(len(count_arr)):
        sorted_arr.extend([i] * count_arr[i])

    return sorted_arr


original_list = [64, 25, 12, 22, 11]
sorted_list = counting_sort(original_list)

print("Original List:", original_list)
print("Sorted List:", sorted_list)
