// Problem: Left Rotate Array by One
// Link: https://leetcode.com/problems/rotate-array/
// In my words:
// Pattern:            | Time O(?), Space O(?)
// Key idea:

const { check } = require("../../lib/check");
/*
  Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.
  Remember this pattern for rotate array by k(leetcode)
  To rotate right by k:
    1. Reverse everything.
    2. Reverse the first k elements.
    3. Reverse everything after k.
*/
var rotate = function(nums, k) {
    let n = nums.length
    k = k % n
    reverse(nums, 0, n-1)
    reverse(nums, 0, k-1)
    reverse(nums, k, n-1)

    return nums;    
};
function reverse(nums, start, end){
    while(start < end){
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}
/*
  Given an integer array nums, rotate the array to the left by one.
    1. Store the first element.
    2. Shift every remaining element one position left.
    3. Put the stored element at the last index.
*/
rotateArrayByOne(nums) {
    let n = nums.length;
    if (n <= 1) return;
    let temp = nums[0];
    for (let i = 0; i < n - 1; i++) {
        nums[i] = nums[i + 1];
    }
    nums[n - 1] = temp;
}
// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
