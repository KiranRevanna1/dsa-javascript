// Problem: Quick Sorting
// Link: https://takeuforward.org/blogs/data-structure-and-algorithm/quick-sort-algorithm
// Time O(n^2), Space O(?)
/* Key idea:Quick Sort doesn't directly sort the entire array. 
- It places a pivot in its correct position, then recursively sorts the elements on either side.
- Once you understand why partition() returns pivotIndex, the recursive calls become much easier to understand. 
- Quick Sort swaps elements to move smaller values to the left of the pivot and larger values to the right. 

The mental model: j searches, i tracks where the next smaller value belongs, and swapping puts that value in the correct section. 
The final swap puts the pivot between the smaller and larger values.
*/

const { check } = require("../../lib/check");


class Solution {
    quickSort(nums) {
        function partition(arr, low, high) {
            let pivot = arr[high];
            let i = low - 1;

            for (let j = low; j < high; j++) {
                if (arr[j] <= pivot) {
                    i++; // Expands the smaller-elements section by one position
                    [arr[i], arr[j]] = [arr[j], arr[i]]; // Moves a smaller value into that section
                }
            }

            [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; // Places the pivot in its final position

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
