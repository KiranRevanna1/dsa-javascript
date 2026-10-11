// Problem: Insertion Sorting
// Link: https://takeuforward.org/blogs/data-structure-and-algorithm/insertion-sort-algorithm
// In my words: what ever values comes before i is considered to be sorted based on key the arr[i] 
// Pattern: save key → shift larger elements → insert key.      | Time O(n^2), Space O(1)
// Key idea: the j used to check and insert the greater value to the next index by using key we assign the previous duplicate value to value in te key eg: 7>4 inside while loop it becomes 77 then outside it becomes 47

const { check } = require("../../lib/check");

class Solution {
    insertionSort(nums) {
        let n = nums.length;
        for(let i=0; i<n; i++){
            let key = nums[i], j = i-1;
          // shifting the number
            while(j>=0 && nums[j]>key){
                nums[j+1] = nums[j]
                j--;
            }
          // assigning key
            nums[j+1] = key;
        }
        return nums
    }
}

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
