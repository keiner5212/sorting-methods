def radix_sort(arr):
    RADIX = 10
    max_length = False
    tmp, placement = -1, 1

    while not max_length:
        max_length = True
        buckets = [list() for _ in range(RADIX)]

        for i in arr:
            tmp = i // placement
            buckets[tmp % RADIX].append(i)
            if max_length and tmp > 0:
                max_length = False

        a = 0
        for b in range(RADIX):
            buck = buckets[b]
            for i in buck:
                arr[a] = i
                a += 1

        placement *= RADIX

    return arr


arr = [64, 25, 12, 22, 11]
print("Original array:", arr)
print("Sorted array:", radix_sort(arr))
