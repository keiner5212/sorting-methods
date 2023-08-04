def insertionSort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = i-1
        while j >= 0 and key < arr[j]:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key


arr = [64, 25, 12, 22, 11]

print("Lista original:")
print(arr)

insertionSort(arr)

print("\nLista ordenada:")
print(arr)
