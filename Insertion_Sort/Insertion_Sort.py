def insertionSort(arr):
    """
    Sorts an array using the Insertion Sort algorithm.

    Parameters:
    - arr (list): The array to be sorted.

    Returns:
    None (the array is sorted in-place).
    """
    for i in range(1, len(arr)):
        key = arr[i]
        j = i - 1

        # Move elements of arr[0..i-1] that are greater than the key to one position ahead of their current position
        while j >= 0 and key < arr[j]:
            arr[j + 1] = arr[j]
            j -= 1

        arr[j + 1] = key


arr = [64, 25, 12, 22, 11]

print("Original List:")
print(arr)

# Call the insertionSort function to sort the array
insertionSort(arr)

print("\nSorted List:")
print(arr)
