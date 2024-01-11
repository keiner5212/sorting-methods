/**
 * Perform radix sort on the given array.
 *
 * @param arr - The input array to be sorted.
 * @returns The sorted array.
 */
function radixSort(arr: number[]): number[] {
    const RADIX: number = 10;
    let maxDigitCount: boolean | number = false;
    let tmp: number = -1;
    let placement: number = 1;

    // Continue sorting until the maximum length is reached for all numbers
    while (!maxDigitCount) {
        maxDigitCount = true;
        const buckets: number[][] = Array.from({ length: RADIX }, () => []);

        // Distribute elements into buckets based on the current digit
        for (let i of arr) {
            tmp = Math.floor(i / placement);
            buckets[tmp % RADIX].push(i);
            if (maxDigitCount && tmp > 0) {
                maxDigitCount = false;
            }
        }

        let a: number = 0;

        // Concatenate the buckets to form the partially sorted array
        for (let b = 0; b < RADIX; b++) {
            const buck: number[] = buckets[b];
            for (let i of buck) {
                arr[a] = i;
                a++;
            }
        }

        placement *= RADIX;
    }

    return arr;
}

const arr: number[] = [64, 25, 12, 22, 11];
console.log("Original array:", arr);
console.log("Sorted array:", radixSort(arr));
