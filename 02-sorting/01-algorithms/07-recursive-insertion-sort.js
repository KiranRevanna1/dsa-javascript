// Problem: Recursive Insertion Sort
// Link: see Striver A2Z sheet → Sorting → Algorithms
// In my words:
// Pattern:            | Time (O(n^2), Space O(?)
// Key idea: outerlopp is recusrion inner lopp stay same in algortihm

const { check } = require("../../lib/check");


class Solution {
    insertionSort(nums) {
        function insertion(arr, i, n) {
            if (i >= n) return;

            let j = i;

            while (j > 0 && arr[j - 1] > arr[j]) {
                [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
                j--;
            }

            insertion(arr, i + 1, n);
        }

        insertion(nums, 0, nums.length);
        return nums;
    }
}


// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
