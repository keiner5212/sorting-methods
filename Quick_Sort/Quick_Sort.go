package main

import (
	"fmt"
)

/**
 * Implementation of the Quick Sort algorithm in Go.
 *
 * @param arr - The input array to be sorted.
 * @return The sorted array.
 */
func quickSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	// Choose the pivot (first element in this case)
	pivot := arr[0]
	var left, right []int

	// Partition the array into elements less than pivot and greater than pivot
	for _, num := range arr[1:] {
		if num < pivot {
			left = append(left, num)
		} else {
			right = append(right, num)
		}
	}

	// Recursively sort the left and right subarrays and concatenate them around the pivot
	return append(append(quickSort(left), pivot), quickSort(right)...)
}

func main() {
	// Example usage
	arr := []int{64, 25, 12, 22, 11}
	fmt.Print("Original array: ")
	fmt.Println(arr)

	sortedArr := quickSort(arr)
	fmt.Print("Sorted array: ")
	fmt.Println(sortedArr)
}
