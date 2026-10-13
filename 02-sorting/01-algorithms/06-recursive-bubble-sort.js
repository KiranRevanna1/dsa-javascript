// Problem: Recursive Bubble Sort
// Link: see Striver A2Z sheet → Sorting → Algorithms
// In my words:
// Pattern:            | Time O(n²), Space O(?)
/* Key idea: Recursion: Repeat Bubble Sort passes by calling bubble(arr, n - 1).
             Optimization: Stop early if didSwap remains false, meaning the array is already sorted.
*/

const { check } = require("../../lib/check");

class Solution {
    bubbleSort(nums) {
        function bubble(arr, n){
            if(n<=1) return
            let didSwap = false
            for(let j=0; j<n-1; j++){
                if(arr[j]>arr[j+1]){
                    [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
                    didSwap = true
                }
            }
            if(!didSwap) return
            bubble(arr, n-1)
        }
        bubble(nums, nums.length)
        return nums
    }
}

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
