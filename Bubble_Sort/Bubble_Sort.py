def bubble_sort(arr):
    n = len(arr)
    for i in range(n - 1):
        for j in range(n - i - 1):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

    return arr


arr = [64, 25, 12, 22, 11]

print("Lista original:", arr)
arr = bubble_sort(arr)
print("Lista ordenada:", arr)
