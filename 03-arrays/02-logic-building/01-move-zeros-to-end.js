// Problem: Move Zeros to End
// Link: https://leetcode.com/problems/move-zeroes/
// In my words:
// Pattern:            | Time O(?), Space O(?)
// Key idea:

const { check } = require("../../lib/check");

function moveZeroes(nums) {
    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            j++;
        }
    }

    return nums;
}
// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
