package main

import (
	"fmt"
)

// countingSort sorts a slice of integers using the Counting Sort algorithm.
func countingSort(arr []int) []int {
	maxValue := 0

	// Find the maximum value in the slice
	for _, num := range arr {
		if num > maxValue {
			maxValue = num
		}
	}

	countArr := make([]int, maxValue+1)

	// Count the occurrences of each element in the input slice
	for _, num := range arr {
		countArr[num]++
	}

	sortedArr := make([]int, 0)

	// Build the output slice using the counting slice
	for i, count := range countArr {
		for j := 0; j < count; j++ {
			sortedArr = append(sortedArr, i)
		}
	}

	return sortedArr
}

func main() {
	// Example usage of Counting Sort
	originalList := []int{64, 25, 12, 22, 11}
	sortedList := countingSort(originalList)

	fmt.Print("Original List: ")
	fmt.Println(originalList)

	fmt.Print("Sorted List: ")
	fmt.Println(sortedList)
}
