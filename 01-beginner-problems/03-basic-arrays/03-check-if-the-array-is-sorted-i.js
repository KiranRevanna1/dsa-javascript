// Problem: Check if the Array is Sorted I
// Link: https://takeuforward.org/blogs/data-structure-and-algorithm/check-if-an-array-is-sorted-in-ascending-order
// In my words:
// Pattern:            | Time O(?), Space O(?)
// Key idea:

const { check } = require("../../lib/check");

class Solution {
    arraySortedOrNot(nums, n) {
       for (let first = 0; first < n - 1; first++) {
            for (let second = first + 1; second < n; second++) {
                if (nums[first] > nums[second]) {
                    return false;
                }
            }
        }
        return true;
    }
}

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
