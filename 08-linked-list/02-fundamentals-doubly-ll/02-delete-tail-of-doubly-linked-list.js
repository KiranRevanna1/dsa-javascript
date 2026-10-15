// Problem: Delete Tail of Doubly Linked List
// Link: see Striver A2Z sheet → Linked List → Fundamentals Doubly LL
// In my words:
// Pattern:            | Time O(?), Space O(?)
// Key idea:

const { check } = require("../../lib/check");


class Solution {
    deleteTail(head) {
        if (head === null || head.next === null) {
            return null;
        }
        let current = head;
        while (current.next !== null) {
            current = current.next;
        }
        current.prev.next = null;
        return head;
    }
}

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
