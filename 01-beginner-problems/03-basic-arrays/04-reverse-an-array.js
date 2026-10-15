// Problem: Reverse an array
// Link: see Striver A2Z sheet → Beginner Problems → Basic Arrays
// In my words:
// Pattern:            | Time O(?), Space O(?)
// Key idea:

const { check } = require("../../lib/check");

class Solution {
    // Function to reverse the array in place
    // The reversal should be done IN-PLACE.
    // Do not return anything from this function.
    reverse(arr, n) {
        arr.reverse()
    }
}
// OR 

class Solution {
    // Function to reverse the array in place
    // The reversal should be done IN-PLACE.
    // Do not return anything from this function.
    reverse(arr, n) {
        let first = 0, last=n-1
        while(first<last){
            [arr[first],arr[last]] = [arr[last], arr[first]];
            first++;
            last--;
        }
    }
}

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
