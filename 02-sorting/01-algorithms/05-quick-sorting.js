// Problem: Quick Sorting
// Link: https://takeuforward.org/blogs/data-structure-and-algorithm/quick-sort-algorithm
// Time O(n^2), Space O(?)
/* Key idea:Quick Sort doesn't directly sort the entire array. 
- It places a pivot in its correct position, then recursively sorts the elements on either side.
- Once you understand why partition() returns pivotIndex, the recursive calls become much easier to understand. 
- Quick Sort swaps elements to move smaller values to the left of the pivot and larger values to the right. 
*/
const { check } = require("../../lib/check");


class Solution {
    quickSort(nums) {
        function partition(arr, low, high) {
            let pivot = arr[high];
            let i = low - 1;

            for (let j = low; j < high; j++) {
                if (arr[j] <= pivot) {
                    i++;
                    [arr[i], arr[j]] = [arr[j], arr[i]];
                }
            }

            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];

            return i + 1;
        }

        function quick(arr, low, high) {
            if (low >= high) return;

            let pivotIndex = partition(arr, low, high);

            quick(arr, low, pivotIndex - 1);
            quick(arr, pivotIndex + 1, high);
        }

        quick(nums, 0, nums.length - 1);
        return nums;
    }
}


// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
