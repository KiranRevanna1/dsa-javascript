// Problem: Insert node before tail in Doubly Linked List
// Link: see Striver A2Z sheet → Linked List → Fundamentals Doubly LL
// In my words:
/* Pattern:  
  Whenever you're manipulating a DLL, check these boundary cases:
    1. Empty list
    2. Single-node list
    3. Multiple-node list| 
    Time O(n), Space O(1)
    */
// Key idea:

const { check } = require("../../lib/check");

class Solution {
  /**
   *
   * @param {ListNode} head
   * @param {Number} X
   * @returns {ListNode}
   */
  insertBeforeTail(head, X) {
    let newNode = new ListNode(X);

    if (head === null) {
      return newNode;
    }

    // Only one node
    if (head.next === null) {
      newNode.next = head;
      head.prev = newNode;
      return newNode;
    }

    let current = head;

    // Reach the tail
    while (current.next !== null) {
      current = current.next;
    }

    newNode.prev = current.prev;
    newNode.next = current;

    current.prev.next = newNode;
    current.prev = newNode;

    return head;
  }
}

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
