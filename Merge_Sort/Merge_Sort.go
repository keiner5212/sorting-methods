package main

import "fmt"

// merge combines two sorted slices into a single sorted slice.
func merge(left []int, right []int) []int {
	result := make([]int, 0, len(left)+len(right))
	i, j := 0, 0

	for i < len(left) && j < len(right) {
		if left[i] < right[j] {
			result = append(result, left[i])
			i++
		} else {
			result = append(result, right[j])
			j++
		}
	}

	result = append(result, left[i:]...)
	result = append(result, right[j:]...)

	return result
}

// mergeSort recursively applies the merge sort algorithm to the given slice.
func mergeSort(arr []int) []int {
	if len(arr) <= 1 {
		return arr
	}

	mid := len(arr) / 2
	left := mergeSort(arr[:mid])
	right := mergeSort(arr[mid:])

	return merge(left, right)
}

func main() {
	arr := []int{64, 25, 12, 22, 11}
	fmt.Println("Original Slice:")
	fmt.Println(arr)

	// Call the mergeSort function to sort the array
	arr = mergeSort(arr)

	fmt.Println("\nSorted Slice:")
	fmt.Println(arr)
}
