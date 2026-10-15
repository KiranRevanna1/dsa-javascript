// Problem: Delete Kth Element of Doubly Linked List
// Link: see Striver A2Z sheet → Linked List → Fundamentals Doubly LL
// In my words:
// Pattern:            | Time O(?), Space O(?)
/*
  Remember the pointer pattern
  For a DLL:
  - Delete head: Move head to head.next; set the new head's prev to null.
  - Delete middle: Connect the previous node to the next node in both directions.
  - Delete tail: Set the previous node's next to null.
  The key lesson: always check whether current.prev or current.next is null before accessing properties on them.
  Complexity: Time (O(k)) in the worst case, or (O(n)) if the requested position is near the end. Auxiliary space (O(1)).
*/

const { check } = require("../../lib/check");


class Solution {
    deleteKthElement(head, k) {
        if (head === null || k < 1) return head;
        let current = head;
        if (k === 1) {
            head = head.next;
            if (head !== null) {
                head.prev = null;
            }
            return head;
        }
        for (let i = 1; i < k; i++) {
            if (current === null) return head;
            current = current.next;
        }
        if (current === null) return head;
        if (current.prev !== null) {
            current.prev.next = current.next;
        }
        if (current.next !== null) {
            current.next.prev = current.prev;
        }
        return head;
    }
}


// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
