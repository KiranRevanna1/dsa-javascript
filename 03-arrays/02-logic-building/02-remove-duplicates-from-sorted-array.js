// Problem: Remove duplicates from sorted array
// Link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/* In my words: 
    Two-pointer logic
      - i → points to the last unique element.
      - j → scans the array to find the next unique element.
      - When nums[i] !== nums[j], we found a new unique element:
        1. Increment i.
        2. Copy nums[j] to nums[i].
  Remember: i tracks the position of the last unique element, while j searches for the next unique element.
  */
// Pattern:            | Time O(n), Space O(1)
// Key idea:

const { check } = require("../../lib/check");

var removeDuplicates = function(nums) {
    let i = 0
    for (let j = 1; j < nums.length; j++){
        if(nums[i] != nums[j]){
            i++;
            nums[i] = nums[j];
       }
    }
    return i + 1
};
// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
