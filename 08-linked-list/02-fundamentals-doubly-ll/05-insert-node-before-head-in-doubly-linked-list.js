// Problem: Insert node before head in Doubly Linked List
// Link: see Striver A2Z sheet → Linked List → Fundamentals Doubly LL
// In my words:
// Pattern:            | Time O(1), Space O(1)
// Key idea:

const { check } = require("../../lib/check");

class Solution {
  insertBeforeHead(head, X) {
    let newNode = new ListNode(X);

    if (head === null) {
      return newNode;
    }

    newNode.next = head;
    head.prev = newNode;

    return newNode;
  }
}
// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
