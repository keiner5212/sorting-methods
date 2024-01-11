package main

import "fmt"

// selectionSort performs selection sort on the given slice of integers.
func selectionSort(arr []int) {
	n := len(arr)

	// Traverse through all array elements
	for i := 0; i < n-1; i++ {
		// Assume the current index is the minimum
		minIdx := i

		// Find the minimum element in the unsorted part of the array
		for j := i + 1; j < n; j++ {
			if arr[j] < arr[minIdx] {
				// Update the index of the minimum element
				minIdx = j
			}
		}

		// Swap the found minimum element with the first element if needed
		arr[i], arr[minIdx] = arr[minIdx], arr[i]
	}
}

func main() {
	arr := []int{64, 25, 12, 22, 11}
	fmt.Println("Original array:", arr)

	// Call the selectionSort function to sort the array
	selectionSort(arr)

	fmt.Println("Sorted array:", arr)
}
