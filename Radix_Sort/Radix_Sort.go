package main

import (
	"fmt"
)

// RadixSort performs radix sort on the given array.
// It returns the sorted array.
func RadixSort(arr []int) []int {
	const RADIX = 10
	maxDigitCount := false
	tmp, placement := -1, 1

	// Continue sorting until the maximum length is reached for all numbers
	for !maxDigitCount {
		maxDigitCount = true
		buckets := make([][]int, RADIX)

		// Distribute elements into buckets based on the current digit
		for _, i := range arr {
			tmp = i / placement
			buckets[tmp%RADIX] = append(buckets[tmp%RADIX], i)
			if maxDigitCount && tmp > 0 {
				maxDigitCount = false
			}
		}

		a := 0

		// Concatenate the buckets to form the partially sorted array
		for b := 0; b < RADIX; b++ {
			buck := buckets[b]
			for _, i := range buck {
				arr[a] = i
				a++
			}
		}

		placement *= RADIX
	}

	return arr
}

func main() {
	arr := []int{64, 25, 12, 22, 11}
	fmt.Print("Original array: ")
	fmt.Println(arr)
	sortedArr := RadixSort(arr)
	fmt.Print("Sorted array: ")
	fmt.Println(sortedArr)
}
