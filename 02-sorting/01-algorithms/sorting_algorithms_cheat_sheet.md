# Sorting Algorithms — Logic, Patterns & Interview Cheat Sheet

## 1. The big picture

| Algorithm | Core idea | Pattern to remember |
|---|---|---|
| Selection Sort | Find the minimum and place it in the next correct position | Select the minimum |
| Bubble Sort | Compare adjacent elements and swap if out of order | Adjacent comparisons and swaps |
| Insertion Sort | Insert the next element into the sorted prefix | Sorted prefix + shifting |
| Merge Sort | Divide into halves, then merge sorted halves | Divide, recurse, merge |
| Quick Sort | Partition around a pivot, then sort both sides | Pivot + partition + recursion |
| Heap Sort | Build a heap and repeatedly extract the maximum | Heapify + root extraction |
| Counting Sort | Count occurrences and reconstruct the array | Frequency counting |
| Radix Sort | Sort digit by digit using a stable sort per digit | Least to most significant digit |
| Bucket Sort | Distribute values into buckets, sort, then combine | Distribute + sort + concatenate |
| Shell Sort | Use decreasing gaps to move elements closer to their positions | Gap-based insertion sort |

---

## 2. Core sorting algorithms

### A. Selection Sort — “Find the minimum”

**Intuition:** The left side is sorted. Find the smallest element in the unsorted part and swap it into the next position.

**Pattern:**
1. `i` marks the position to fill.
2. `minIndex` tracks the smallest value found.
3. `j` searches the remaining array.
4. Swap `arr[i]` with `arr[minIndex]`.

```javascript
for (let i = 0; i < n - 1; i++) {
    let minIndex = i;

    for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIndex]) {
            minIndex = j;
        }
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
}
```

**Recognition clue:** Repeatedly find the smallest or largest remaining element.

### B. Bubble Sort — “Push the largest to the end”

**Intuition:** Compare neighboring elements. If the left one is larger, swap them. After each pass, the largest remaining element reaches the end.

**Pattern:** Adjacent comparisons, swaps, and a shrinking unsorted range.

```javascript
for (let i = n - 1; i > 0; i--) {
    let didSwap = false;

    for (let j = 0; j < i; j++) {
        if (arr[j] > arr[j + 1]) {
            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            didSwap = true;
        }
    }

    if (!didSwap) break;
}
```

**Recognition clue:** Adjacent comparisons and repeated swaps. With early exit, an already sorted array takes `O(n)` time.

### C. Insertion Sort — “Take and insert”

**Intuition:** Maintain a sorted prefix. Pick the next element, shift larger elements right, and insert the picked element into the gap.

```javascript
for (let i = 1; i < n; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
    }

    arr[j + 1] = key;
}
```

**Recognition clue:** Sorted prefix, saved `key`, shifting, and inserting into the correct gap. This implementation shifts rather than repeatedly swapping.

### D. Merge Sort — “Divide, then merge”

**Intuition:** Split the array into halves until each half contains one element. Merge the sorted halves back together.

```javascript
function mergeSort(arr, low, high) {
    if (low >= high) return;

    let mid = Math.floor((low + high) / 2);

    mergeSort(arr, low, mid);
    mergeSort(arr, mid + 1, high);

    merge(arr, low, mid, high);
}
```

**Merge pattern:**
1. Use two pointers, one for each sorted half.
2. Repeatedly copy the smaller value into `temp`.
3. Copy any remaining values from either half.
4. Copy `temp` back into the original range with `arr[low + i] = temp[i]`.

**Recognition clue:** Divide into halves, recursively solve each half, then combine sorted results.

### E. Quick Sort — “Partition around a pivot”

**Intuition:** Select a pivot, move smaller or equal values to its left and larger values to its right, then recursively sort both sides.

```javascript
let pivotIndex = partition(arr, low, high);

quickSort(arr, low, pivotIndex - 1);
quickSort(arr, pivotIndex + 1, high);
```

**Partition pattern (Lomuto):**
1. Choose the last element as pivot.
2. `j` scans the range; `i` marks the end of the smaller-elements region.
3. If `arr[j] <= pivot`, increment `i` and swap `arr[i]` with `arr[j]`.
4. At the end, swap the pivot into `arr[i + 1]`.
5. Return `i + 1`, the pivot's final index.

**Recognition clue:** Pivot, partition, and recursive calls around the pivot.

**Key distinction:** Quick Sort organizes elements during partitioning; Merge Sort organizes them while merging.

---

## 3. Other important sorting algorithms

### F. Heap Sort — “Build a heap, extract the maximum”

**Intuition:** Build a max heap, where the largest element is at the root. Swap it with the last element, reduce the heap size, and restore the heap property.

```javascript
for (let end = n - 1; end > 0; end--) {
    [arr[0], arr[end]] = [arr[end], arr[0]];
    heapify(arr, end, 0);
}
```

**Pattern:** Build max heap → swap root to end → shrink heap → heapify.

### G. Counting Sort — “Count occurrences”

**Intuition:** Count how often each integer appears, then reconstruct the sorted array.

Example: `[3, 1, 2, 1, 3]` → counts `1: 2`, `2: 1`, `3: 2` → `[1, 1, 2, 3, 3]`.

**Recognition clue:** Integers in a reasonably small value range, where a frequency array is practical.

### H. Radix Sort — “Sort digit by digit”

**Intuition:** Sort by individual digits, usually from least significant to most significant. Each digit pass must be stable, often using Counting Sort.

**Recognition clue:** Integers with a bounded number of digits when comparison sorting is not ideal.

### I. Bucket Sort — “Distribute, sort, combine”

**Intuition:** Distribute values into buckets based on their ranges, sort each bucket, then concatenate the buckets in order.

**Recognition clue:** Values are reasonably evenly distributed over a known range.

### J. Shell Sort — “Insertion Sort with gaps”

**Intuition:** Compare elements that are far apart using a gap. Reduce the gap until it becomes `1`, finishing with ordinary insertion sort.

**Recognition clue:** Gap-based comparisons and insertion-style shifting.

---

## 4. Time and space complexity

| Algorithm | Best time | Average time | Worst time | Typical extra space |
|---|---:|---:|---:|---:|
| Selection Sort | `O(n²)` | `O(n²)` | `O(n²)` | `O(1)` |
| Bubble Sort (early exit) | `O(n)` | `O(n²)` | `O(n²)` | `O(1)` |
| Insertion Sort (iterative) | `O(n)` | `O(n²)` | `O(n²)` | `O(1)` |
| Merge Sort | `O(n log n)` | `O(n log n)` | `O(n log n)` | `O(n)` |
| Quick Sort | `O(n log n)` | `O(n log n)` | `O(n²)` | `O(log n)` average recursion stack; `O(n)` worst |
| Heap Sort (iterative) | `O(n log n)` | `O(n log n)` | `O(n log n)` | `O(1)` |
| Counting Sort | `O(n + k)` | `O(n + k)` | `O(n + k)` | `O(k)` frequency array, plus output if used |
| Radix Sort | `O(d(n + b))` | `O(d(n + b))` | `O(d(n + b))` | Typically `O(n + b)` |
| Bucket Sort | Distribution-dependent | Often `O(n + k)` under suitable assumptions | Can be `O(n²)` | Typically `O(n + k)` |
| Shell Sort | Gap-dependent | Gap-dependent | Gap-dependent | `O(1)` |

**Notation:**
- `n`: number of elements.
- `k`: value-range size or number of buckets, depending on the algorithm.
- `d`: number of digit positions.
- `b`: digit base/radix.

Complexities depend on implementation details and assumptions. Bucket Sort's linear expected time requires suitable input distribution and efficient per-bucket sorting.

---

## 5. Stability and in-place behavior

| Algorithm | Stable by default? | In-place in typical implementation? |
|---|---|---|
| Selection Sort | No | Yes |
| Bubble Sort | Yes, if equal elements are not swapped | Yes |
| Insertion Sort | Yes, if equal elements are not shifted past each other | Yes |
| Merge Sort | Yes, with a stable merge | Usually no; needs an auxiliary array |
| Quick Sort | No | Yes, with in-place partitioning |
| Heap Sort | No | Yes |
| Counting Sort | Depends on implementation | Usually no |
| Radix Sort | Yes, if each digit pass is stable | Usually no |
| Bucket Sort | Depends on bucket sorting method | Depends on implementation |
| Shell Sort | No | Yes |

---

## 6. How to recognize the pattern in an interview

| Clue in the problem or algorithm | Think of |
|---|---|
| Find the smallest remaining element | Selection Sort |
| Repeatedly compare neighboring elements | Bubble Sort |
| Keep a prefix sorted and insert the next element | Insertion Sort |
| Split into halves and merge sorted results | Merge Sort |
| Choose a pivot and partition around it | Quick Sort |
| Repeatedly extract the maximum from a heap | Heap Sort |
| Small, bounded integer range; count frequencies | Counting Sort |
| Sort numbers by digit positions | Radix Sort |
| Distribute values into range-based groups | Bucket Sort |
| Compare elements using decreasing gaps | Shell Sort |

---

## 7. The five core patterns to master first

1. **Selection:** `minIndex` + nested loops + one swap per pass.
2. **Bubble:** adjacent comparison + swap + shrinking unsorted range.
3. **Insertion:** save `key` + shift elements + insert into the gap.
4. **Merge:** divide recursively + two pointers + temporary array.
5. **Quick:** pivot + partition boundary + recursive calls.

Learn these five first. For each one, practice writing it from scratch, dry-running it, explaining why each pointer moves, and stating its time and space complexity. Then move on to Heap Sort and the non-comparison sorts.
