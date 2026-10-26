// Problem: Insertion before the value X in Linked List
// Link: https://takeuforward.org/blogs/data-structure-and-algorithm/insert-node-before-value-x-in-linked-list
// In my words:
// Pattern:            | Time O(?), Space O(?)
// Key idea:

const { check } = require("../../lib/check");

class Solution {
    insertBeforeX(head, X, val) {
        const newNode = new ListNode(val);
        // If the head itself contains X
        if (head !== null && head.data === X) {
            newNode.next = head;
            return newNode;
        }
        let current = head;
        // Find the node immediately before X
        while (current !== null && current.next !== null) {
            if (current.next.data === X) {
                newNode.next = current.next;
                current.next = newNode;
                return head;
            }

            current = current.next;
        }
        // X was not found
        return head;
    }
}

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
