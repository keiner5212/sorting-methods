# Sorting Algorithms

This repository contains many sorting algorithms implemented in various programming languages.

## Algorithms

| Algorithm | Time Complexity | Optimal Number of Values |
| --- | --- | --- |
| Selection Sort | O(n^2) | Small |
| Bubble Sort | O(n^2) | Small |
| Insertion Sort | O(n^2) | Small |
| Merge Sort | O(n log n) | Large |
| Quick Sort | O(n log n) | Large |
| Heap Sort | O(n log n) | Large |
| Counting Sort | O(n + k) | Small and integers  |
| Radix Sort | O(nk) | Small and integers  |
| Bucket Sort | O(n + k) | Small and uniformly distributed  |

## Descriptions

- **Selection sort**: This algorithm sorts an array by repeatedly finding the minimum element from the unsorted part of the array and putting it at the beginning.
- **Bubble sort**: This algorithm repeatedly swaps adjacent elements if they are in the wrong order.
- **Insertion sort**: This algorithm builds a final sorted array one element at a time by inserting each element into its correct position.
- **Merge sort**: This algorithm divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.
- **Quick sort**: This algorithm picks an element as a pivot and partitions the given array around the picked pivot.
- **Heap sort**: This algorithm sorts an array by first building a heap from the input data and then removing the root element repeatedly to get the sorted array.
- **Counting sort**: This algorithm sorts an array by counting the number of occurrences of each unique element in the array and then using those counts to compute an index into a final sorted array.
- **Radix sort**: This algorithm sorts an array by grouping elements by their individual digits that share the same significant position and value.
- **Bucket sort**: This algorithm sorts an array by distributing elements into a number of buckets, each of which is then sorted individually.

## Advantages and Disadvantages

| Algorithm | Advantages | Disadvantages |
| --- | --- | --- |
| Selection Sort | Easy to implement. In-place sorting. Good for small data sets.  | Inefficient for large data sets. Time complexity is always O(n^2). |
| Bubble Sort | Easy to implement. In-place sorting. Good for small data sets.  | Inefficient for large data sets. Time complexity is always O(n^2). |
| Insertion Sort | Easy to implement. In-place sorting. Good for small data sets.  | Inefficient for large data sets. Time complexity is always O(n^2). |
| Merge Sort | Efficient for large data sets. Stable sorting algorithm.  | Not in-place sorting. Requires extra memory space. Time complexity is always O(n log n). |
| Quick Sort | Efficient for large data sets. In-place sorting.  | Unstable sorting algorithm. Worst-case time complexity is O(n^2). |
| Heap Sort | Efficient for large data sets. In-place sorting.  | Unstable sorting algorithm. Not a stable sorting algorithm. Time complexity is always O(n log n). |
| Counting Sort | Efficient for small data sets with integers only. Linear time complexity (O(n + k)).  | Not suitable for floating point numbers or negative numbers without modification. Requires extra memory space proportional to range of input values (k). |
| Radix Sort | Efficient for small data sets with integers only. Linear time complexity (O(nk)). Stable sorting algorithm.  | Not suitable for negative numbers without modification or floating point numbers without conversion to integers first. Requires extra memory space proportional to range of input values (k). |
| Bucket Sort | Efficient for small data sets with uniformly distributed values only. Linear time complexity (O(n + k)). Stable sorting algorithm.  | Not suitable for non-uniformly distributed values or negative numbers without modification. Requires extra memory space proportional to range of input values (k). |

: Source: Wikipedia
