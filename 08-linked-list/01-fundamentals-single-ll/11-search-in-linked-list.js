// Problem: Search in Linked List
// Link: see Striver A2Z sheet → Linked List → Fundamentals Single LL
// In my words:
// Pattern:            | Time O(n), Space O(1)
// Key idea: 

const { check } = require("../../lib/check");
class Solution {
    searchKey(head, key) {
        let current = head;
        while (current !== null) {
            if (current.val === key) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
}

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
