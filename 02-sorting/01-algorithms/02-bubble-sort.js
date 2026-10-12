// Problem: Bubble Sort
// Link: https://takeuforward.org/blogs/data-structure-and-algorithm/bubble-sort-algorithm
// In my words:
// Pattern:            | Time O(?), Space O(?)
// Key idea:

const { check } = require("../../lib/check");

class Solution {
    bubbleSort(nums) {
        let n=nums.length-1
        for(let i=n; i>=0; i--){
            for(let j=0; j<=i-1;j++){
                if(nums[j]>nums[j+1]){
                    [nums[j],nums[j+1]]= [nums[j+1], nums[j]]
                }
            }
        }
        return nums;
    }
}

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
