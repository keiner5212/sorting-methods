def heapify(arr, n, i):
    """
    Adjusts the heap rooted at index i to maintain the heap property.
    :param arr: The array to be heapified.
    :param n: The size of the heap.
    :param i: The index of the current root of the heap.
    """
    largest = i
    l = 2 * i + 1
    r = 2 * i + 2

    # Check if the left child is larger than the root
    if l < n and arr[l] > arr[largest]:
        largest = l

    # Check if the right child is larger than the current largest
    if r < n and arr[r] > arr[largest]:
        largest = r

    # If the largest is not the root, swap and recursively heapify the affected subtree
    if largest != i:
        arr[i], arr[largest] = arr[largest], arr[i]
        heapify(arr, n, largest)


def heapSort(arr):
    """
    Sorts an array using the Heap Sort algorithm.
    :param arr: The array to be sorted.
    :return: A sorted array.
    """
    n = len(arr)

    # Build the heap (rearrange the array)
    for i in range(n // 2 - 1, -1, -1):
        heapify(arr, n, i)

    # One by one extract an element from the heap
    for i in range(n - 1, 0, -1):
        # Move the current root to the end
        arr[0], arr[i] = arr[i], arr[0]

        # Call heapify on the reduced heap
        heapify(arr, i, 0)

    return arr


# Example usage of Heap Sort
arr = [64, 25, 12, 22, 11]
print("Original List: ", arr)
sorted_arr = heapSort(arr)
print("Sorted List: ", sorted_arr)
