// Problem: Second Largest Element
// Link: https://takeuforward.org/blogs/data-structure-and-algorithm/second-largest-element
// In my words:
// Pattern:            | Time O(?), Space O(?)
// Key idea:

const { check } = require("../../lib/check");

class Solution {
    secondLargestElement(nums) {
        let largest = -Infinity;
        let secondLargest = -Infinity;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > largest) {
                secondLargest = largest;
                largest = nums[i];
            }
            else if (nums[i] > secondLargest && nums[i] < largest) {
                secondLargest = nums[i];
            }
        }
        return secondLargest === -Infinity ? -1 : secondLargest;
    }
}


// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
