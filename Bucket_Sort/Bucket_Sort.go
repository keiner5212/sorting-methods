package main

import (
	"fmt"
	"math"
)

// bucketSort ordena un slice de números utilizando el algoritmo de ordenación de cubetas.
func bucketSort(arr []int, numBuckets int) []int {
	// Caso base: si el slice tiene uno o cero elementos, ya está ordenado
	if len(arr) <= 1 {
		return arr
	}

	// Encuentra los valores mínimo y máximo en el slice
	minVal := arr[0]
	maxVal := arr[0]
	for _, v := range arr[1:] {
		if v < minVal {
			minVal = v
		} else if v > maxVal {
			maxVal = v
		}
	}

	// Crea cubetas basadas en el rango de valores
	buckets := make([][]int, numBuckets)
	for i := range buckets {
		buckets[i] = make([]int, 0)
	}

	// Distribuye elementos en las cubetas
	for _, v := range arr {
		bucketIndex := int(math.Floor(float64(v-minVal) / float64(maxVal-minVal) * float64(numBuckets-1)))
		buckets[bucketIndex] = append(buckets[bucketIndex], v)
	}

	// Ordena cada cubeta y concaténalas para formar el slice final ordenado
	var output []int
	for _, bucket := range buckets {
		if len(bucket) > 0 {
			sortedBucket := bucketSort(bucket, len(bucket))
			output = append(output, sortedBucket...)
		}
	}

	return output
}

func main() {
	// Ejemplo de uso
	originalArr := []int{64, 25, 12, 22, 11}
	sortedArr := bucketSort(originalArr, 4)

	fmt.Print("Lista original: ")
	fmt.Println(originalArr)

	fmt.Print("Lista ordenada: ")
	fmt.Println(sortedArr)
}
