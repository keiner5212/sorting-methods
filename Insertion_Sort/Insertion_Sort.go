package main

import "fmt"

// insertionSort sorts an array using the Insertion Sort algorithm.
func insertionSort(arr []int) {
	for i := 1; i < len(arr); i++ {
		key := arr[i]
		j := i - 1

		// Move elements of arr[0..i-1] that are greater than the key to one position ahead of their current position
		for j >= 0 && key < arr[j] {
			arr[j+1] = arr[j]
			j--
		}

		arr[j+1] = key
	}
}

func main() {
	arr := []int{64, 25, 12, 22, 11}

	fmt.Println("Original List:")
	fmt.Println(arr)

	// Call the insertionSort function to sort the array
	insertionSort(arr)

	fmt.Println("\nSorted List:")
	fmt.Println(arr)
}
