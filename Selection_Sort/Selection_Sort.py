def selection_sort(arr):
    """
    Perform selection sort on the given list.

    Parameters:
    - arr (list): The list to be sorted.

    Returns:
    - list: The sorted list.
    """
    n = len(arr)

    # Traverse through all list elements
    for i in range(n):
        # Assume the current index is the minimum
        min_idx = i

        # Find the minimum element in the unsorted part of the list
        for j in range(i + 1, n):
            if arr[j] < arr[min_idx]:
                # Update the index of the minimum element
                min_idx = j

        # Swap the found minimum element with the first element if needed
        arr[i], arr[min_idx] = arr[min_idx], arr[i]

    return arr


arr = [64, 25, 12, 22, 11]
print("Original array:", arr)
print("Sorted array:", selection_sort(arr))
