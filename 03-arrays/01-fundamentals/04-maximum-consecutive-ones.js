// Problem: Maximum Consecutive Ones
// Link: https://leetcode.com/problems/max-consecutive-ones/
// In my words:
// Pattern:            | Time O(n), Space O(1)
// Key idea:

const { check } = require("../../lib/check");

var findMaxConsecutiveOnes = function(nums) {
    let cnt = 0;
    let maxi = 0;
    for(const num of nums){
        if(num === 1){
            cnt++;
        }else {
            cnt = 0;
        }
        maxi = Math.max(maxi, cnt);
    }
    return maxi;
};

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
