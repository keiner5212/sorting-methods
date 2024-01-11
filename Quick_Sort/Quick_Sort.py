def quick_sort(arr):
    """
    Implementation of the Quick Sort algorithm in Python.

    Parameters:
    - arr (list): The input list to be sorted.

    Returns:
    - list: The sorted list.
    """
    # Base case: if the list has 1 or 0 elements, it is already sorted
    if len(arr) <= 1:
        return arr
    else:
        # Choose the pivot (first element in this case)
        pivot = arr[0]
        left = []
        right = []

        # Partition the list into elements less than pivot and greater than pivot
        for i in arr[1:]:
            if i < pivot:
                left.append(i)
            else:
                right.append(i)

        # Recursively sort the left and right sublists and concatenate them around the pivot
        return quick_sort(left) + [pivot] + quick_sort(right)


# Example usage
arr = [64, 25, 12, 22, 11]
print("Original array:", arr)
print("Sorted array:", quick_sort(arr))
