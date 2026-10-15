// Problem: Count of odd numbers in Array
// Link: https://takeuforward.org/blogs/data-structure-and-algorithm/odd-elements-in-an-array
// In my words:
// Pattern:            | Time O(?), Space O(?)
// Key idea:

const { check } = require("../../lib/check");

class Solution {
    countOdd(arr, n) {
        let count = 0;
        for(let i=0; i<n; i++){
            if(arr[i] % 2 !== 0){
                count++;
            }
        }
        return count;
    }
}

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
