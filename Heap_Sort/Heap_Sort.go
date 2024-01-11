package main

import (
	"fmt"
)

// Adjusts the heap rooted at index i to maintain the heap property.
func heapify(arr []int, n, i int) {
	largest := i
	l := 2*i + 1
	r := 2*i + 2

	// Check if the left child is larger than the root
	if l < n && arr[l] > arr[largest] {
		largest = l
	}

	// Check if the right child is larger than the current largest
	if r < n && arr[r] > arr[largest] {
		largest = r
	}

	// If the largest is not the root, swap and recursively heapify the affected subtree
	if largest != i {
		arr[i], arr[largest] = arr[largest], arr[i]
		heapify(arr, n, largest)
	}
}

// Sorts an array using the Heap Sort algorithm.
func heapSort(arr []int) {
	n := len(arr)

	// Build the heap (rearrange the array)
	for i := n/2 - 1; i >= 0; i-- {
		heapify(arr, n, i)
	}

	// One by one extract an element from the heap
	for i := n - 1; i > 0; i-- {
		// Move the current root to the end
		arr[0], arr[i] = arr[i], arr[0]

		// Call heapify on the reduced heap
		heapify(arr, i, 0)
	}
}

func main() {
	arr := []int{64, 25, 12, 22, 11}
	fmt.Println("Original List:", arr)
	heapSort(arr)
	fmt.Println("Sorted List:", arr)
}
