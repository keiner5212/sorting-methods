package main

import "fmt"

// BubbleSort sorts a slice of numbers using the Bubble Sort algorithm.
func BubbleSort(arr []int) []int {
	n := len(arr)
	for i := 0; i < n-1; i++ {
		for j := 0; j < n-i-1; j++ {
			if arr[j] > arr[j+1] {
				arr[j], arr[j+1] = arr[j+1], arr[j]
			}
		}
	}

	return arr
}

func main() {
	// Example usage
	arr := []int{64, 25, 12, 22, 11}

	// Print the original list
	fmt.Print("Original List: ")
	fmt.Println(arr)

	// Call the BubbleSort function to sort the slice
	arr = BubbleSort(arr)

	// Print the sorted list
	fmt.Print("Sorted List: ")
	fmt.Println(arr)
}
