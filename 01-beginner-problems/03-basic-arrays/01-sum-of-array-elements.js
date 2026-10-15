// Problem: Sum of Array Elements
// Link: https://takeuforward.org/blogs/data-structure-and-algorithm/sum-of-array
// In my words:
// Pattern:            | Time O(?), Space O(?)
// Key idea:

const { check } = require("../../lib/check");

class Solution {
    sum(arr) {
        let sum =0
        for(const val of arr){
            sum += val;
        }
        return sum;
    }
}

// OR 

class Solution {
    sum(arr,n) {
        let sum =0
        for(let i=0; i<n; i++){
            sum += arr[i];
        }
        return sum;
    }
}


// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
