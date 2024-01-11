# Sorting Algorithms

This repository is a collection of various sorting algorithms implemented in different programming languages. Whether you are a beginner looking to understand sorting algorithms or an experienced developer seeking reference implementations, this repository aims to provide a comprehensive resource.

## Table of Contents

- [Sorting Algorithms](#sorting-algorithms)
  - [Table of Contents](#table-of-contents)
  - [Algorithms](#algorithms)
  - [Descriptions](#descriptions)
  - [Advantages and Disadvantages](#advantages-and-disadvantages)
  - [Practical Use Cases](#practical-use-cases)
  - [Tips for Choosing an Algorithm](#tips-for-choosing-an-algorithm)
  - [Community Contributions](#community-contributions)

## Algorithms

| Algorithm      | Time Complexity | Optimal Number of Values        |
| -------------- | --------------- | ------------------------------- |
| Selection Sort | O(n^2)          | Small                           |
| Bubble Sort    | O(n^2)          | Small                           |
| Insertion Sort | O(n^2)          | Small                           |
| Merge Sort     | O(n log n)      | Large                           |
| Quick Sort     | O(n log n)      | Large                           |
| Heap Sort      | O(n log n)      | Large                           |
| Counting Sort  | O(n + k)        | Small and integers              |
| Radix Sort     | O(nk)           | Small and integers              |
| Bucket Sort    | O(n + k)        | Small and uniformly distributed |

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

| Algorithm      | Advantages                                                                                                                         | Disadvantages                                                                                                                                                                                 |
| -------------- | ---------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Selection Sort | Easy to implement. In-place sorting. Good for small data sets.                                                                     | Inefficient for large data sets. Time complexity is always O(n^2).                                                                                                                            |
| Bubble Sort    | Easy to implement. In-place sorting. Good for small data sets.                                                                     | Inefficient for large data sets. Time complexity is always O(n^2).                                                                                                                            |
| Insertion Sort | Easy to implement. In-place sorting. Good for small data sets.                                                                     | Inefficient for large data sets. Time complexity is always O(n^2).                                                                                                                            |
| Merge Sort     | Efficient for large data sets. Stable sorting algorithm.                                                                           | Not in-place sorting. Requires extra memory space. Time complexity is always O(n log n).                                                                                                      |
| Quick Sort     | Efficient for large data sets. In-place sorting.                                                                                   | Unstable sorting algorithm. Worst-case time complexity is O(n^2).                                                                                                                             |
| Heap Sort      | Efficient for large data sets. In-place sorting.                                                                                   | Unstable sorting algorithm. Not a stable sorting algorithm. Time complexity is always O(n log n).                                                                                             |
| Counting Sort  | Efficient for small data sets with integers only. Linear time complexity (O(n + k)).                                               | Not suitable for floating point numbers or negative numbers without modification. Requires extra memory space proportional to range of input values (k).                                      |
| Radix Sort     | Efficient for small data sets with integers only. Linear time complexity (O(nk)). Stable sorting algorithm.                        | Not suitable for negative numbers without modification or floating point numbers without conversion to integers first. Requires extra memory space proportional to range of input values (k). |
| Bucket Sort    | Efficient for small data sets with uniformly distributed values only. Linear time complexity (O(n + k)). Stable sorting algorithm. | Not suitable for non-uniformly distributed values or negative numbers without modification. Requires extra memory space proportional to range of input values (k).                            |

### Practical Use Cases

Understanding the characteristics and behaviors of each sorting algorithm can help developers choose the most appropriate solution for specific scenarios. Here are some practical use cases for the sorting algorithms included in this repository:

1. **Selection Sort, Bubble Sort, Insertion Sort:**
   - Ideal for small datasets where simplicity and ease of implementation are prioritized.
   - Suitable for scenarios where the dataset is nearly sorted or partially sorted.

2. **Merge Sort:**
   - Efficient for large datasets where stability is crucial.
   - Well-suited for scenarios where additional memory space is not a limiting factor.

3. **Quick Sort:**
   - Excellent for large datasets due to its efficient average-case time complexity.
   - Appropriate for situations where in-place sorting is necessary.

4. **Heap Sort:**
   - Well-suited for large datasets and resource-constrained environments.
   - Useful when a stable sorting algorithm with in-place sorting is required.

5. **Counting Sort:**
   - Efficient for small datasets containing integers with a limited range.
   - Suitable for scenarios where linear time complexity is essential.

6. **Radix Sort:**
   - Appropriate for small datasets with integers and a need for stable sorting.
   - Efficient when sorting based on multiple digits or keys.

7. **Bucket Sort:**
   - Effective for small datasets with uniformly distributed values.
   - Ideal for situations where linear time complexity and stability are important.

### Tips for Choosing an Algorithm

Selecting the right sorting algorithm depends on various factors related to the dataset and the requirements of the application. Consider the following tips:

- **Dataset Size:**
  - For small datasets, simpler algorithms like Selection Sort, Bubble Sort, or Insertion Sort may suffice.
  - For large datasets, more efficient algorithms like Merge Sort, Quick Sort, or Heap Sort are preferable.

- **Stability Requirement:**
  - If maintaining the relative order of equal elements is crucial, opt for stable sorting algorithms like Merge Sort or Radix Sort.

- **In-Place Sorting:**
  - Choose algorithms like Quick Sort or Heap Sort when minimizing additional memory usage is essential.

- **Specialized Data:**
  - For datasets containing integers with a limited range, consider Counting Sort or Radix Sort.
  - Bucket Sort is suitable for uniformly distributed values.

### Community Contributions

This repository thrives on the collaborative efforts of the community. Your contributions are highly encouraged:

- **Add Implementations:**
  - Contribute implementations of sorting algorithms in programming languages not currently covered.
  
- **Suggest Improvements:**
  - Share your insights and suggest improvements to existing code for enhanced clarity and performance.

- **Provide Language-Specific Tips:**
  - Offer tips or considerations specific to certain programming languages for implementing or optimizing sorting algorithms.

