def bubble_sort(arr):
    """
    Sorts a list of numbers using the Bubble Sort algorithm.

    Parameters:
    - arr (list): The list to be sorted.

    Returns:
    - list: The sorted list.
    """
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

    return arr


# Example usage
arr = [64, 25, 12, 22, 11]

# Print the original list
print("Original List:", arr)

# Call the bubble_sort function to sort the list
arr = bubble_sort(arr)

# Print the sorted list
print("Sorted List:", arr)
