// Problem: Linear Search
// Link: https://takeuforward.org/blogs/data-structure-and-algorithm/linear-search-algorithm
// In my words:
// Pattern: find the target element by traversing the elements in the array until we fing the first occurrance            | Time O(n), Space O(1)
// Key idea:

const { check } = require("../../lib/check");

class Solution {
    linearSearch(nums, target) {
        for(let i =0; i<nums.length; i++){
            if(nums[i]===target){
                return i;
            }
        }
        return -1
    }
}
// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
