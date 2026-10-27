// Problem: Selection Sort
// Link: https://takeuforward.org/blogs/data-structure-and-algorithm/selection-sort-algorithm
// In my words: minIndex is initailized to i and then wheen smallest element found in j loop it index is assigned to minIndex use the minIndex and swap the i and minIndex
// Pattern: find smallest element than i from j - n if found assign the index to minIndex and swap the smallest minIndex with i | Time O(nlogn), Space O(1)
// Key idea: find smallest element than i - n swap thhe smallest with i

const { check } = require("../../lib/check");

class Solution {
    selectionSort(nums) {
        let n=nums.length-1
        for(let i=0; i<=n; i++){
            let minIndex=i;
            for(let j=i; j<=n; j++){
                if(nums[j]<nums[minIndex]){
                    maxIndex=j
                }
            }
            [nums[i],nums[minIndex]] = [nums[minIndex], nums[i]]
        }
        return nums;
    }
}
// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
