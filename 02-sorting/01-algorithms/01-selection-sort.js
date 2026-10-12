// Problem: Selection Sort
// Link: https://takeuforward.org/blogs/data-structure-and-algorithm/selection-sort-algorithm
// In my words:
// Pattern:            | Time O(?), Space O(?)
// Key idea:

const { check } = require("../../lib/check");

class Solution {
    selectionSort(nums) {
        let n=nums.length-1
        for(let i=0; i<=n; i--){
            let maxIndex=i;
            for(let j=i; j<=n; j++){
                if(nums[j]<nums[maxIndex]){
                    maxIndex=j
                }
            }
            [nums[i],nums[maxIndex]] = [nums[maxIndex], nums[i]]
        }
        return nums;
    }
}
// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
