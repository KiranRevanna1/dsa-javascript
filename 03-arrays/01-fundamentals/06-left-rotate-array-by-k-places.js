// Problem: Left Rotate Array by K Places
// Link: https://leetcode.com/problems/rotate-array/
// In my words:
/*
    Rotation	Reversal order
    Right by k	Entire → First k → Remaining
    Left by k	First k → Remaining → Entire
    
    Complexity:
    - Time: O(n)
    - Auxiliary space: O(1)
*/
// Key idea:

const { check } = require("../../lib/check");

class Solution {
    rotateArray(nums, k) {
        let n = nums.length;
        if (n <= 1) return nums;
        k = k % n;
        this.reverse(nums, 0, k - 1);
        this.reverse(nums, k, n - 1);
        this.reverse(nums, 0, n - 1);
        return nums;
    }
    reverse(nums, start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]];
            start++;
            end--;
        }
    }
}

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
