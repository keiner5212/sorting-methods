def counting_sort(arr):
    max_value = max(arr)
    count_arr = [0] * (max_value + 1)

    for num in arr:
        count_arr[num] += 1

    sorted_arr = []

    for i in range(len(count_arr)):
        sorted_arr.extend([i] * count_arr[i])

    return sorted_arr


original_list = [64, 25, 12, 22, 11]
sorted_list = counting_sort(original_list)

print("Lista original:", original_list)
print("Lista ordenada:", sorted_list)
