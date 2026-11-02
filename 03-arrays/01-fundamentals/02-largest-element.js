// Problem: Largest Element
// Link: https://takeuforward.org/blogs/data-structure-and-algorithm/find-the-largest-element-in-an-array
// In my words:
// Pattern: traversing the elements in the array if largest found assigning it to variable max           | Time O(n), Space O(1)
// Key idea:

const { check } = require("../../lib/check");

    largestElement(nums) {
        let max = 0
        for(let i=0; i<nums.length; i++){
            if(max < nums[i]){
                max = nums[i]
            }
        }
        return max
    }

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
