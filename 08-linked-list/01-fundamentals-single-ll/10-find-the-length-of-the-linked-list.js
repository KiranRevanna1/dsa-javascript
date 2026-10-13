// Problem: Find the length of the Linked List
// Link: see Striver A2Z sheet → Linked List → Fundamentals Single LL
// In my words:
// Pattern:            | Time O(n), Space O(1)
// Key idea: Use while (current !== null) when you need to process every node, including the last one.

const { check } = require("../../lib/check");

class Solution {
    getLength(head) {
        let count = 0;
        let current = head;
        while (current !== null) {
            count++;
            current = current.next;
        }
        return count;
    }
}


// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
