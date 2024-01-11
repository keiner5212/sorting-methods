def mergeSort(arr):
    """
    Sorts an array in ascending order using the merge sort algorithm.

    Parameters:
    - arr (List[int]): The array to be sorted.

    Returns:
    - None: The sorting is done in-place, and the result is reflected in the input array.
    """
    if len(arr) > 1:
        mid = len(arr) // 2
        left_half = arr[:mid]
        right_half = arr[mid:]

        # Recursively sort the left and right halves
        mergeSort(left_half)
        mergeSort(right_half)

        i = 0
        j = 0
        k = 0

        # Merge the sorted left and right halves
        while i < len(left_half) and j < len(right_half):
            if left_half[i] < right_half[j]:
                arr[k] = left_half[i]
                i += 1
            else:
                arr[k] = right_half[j]
                j += 1
            k += 1

        # Check for any remaining elements in the left half
        while i < len(left_half):
            arr[k] = left_half[i]
            i += 1
            k += 1

        # Check for any remaining elements in the right half
        while j < len(right_half):
            arr[k] = right_half[j]
            j += 1
            k += 1


# Example usage
arr = [64, 25, 12, 22, 11]
print("Original List:")
print(arr)

# Call the mergeSort function to sort the array
mergeSort(arr)

print("\nSorted List:")
print(arr)
