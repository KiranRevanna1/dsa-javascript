// Problem: Delete the element with value X
// Link: see Striver A2Z sheet → Linked List → Fundamentals Single LL
// In my words:
// Pattern:            | Time O(1), Space O(1)
// Key idea: using x finddd dthe next val of it assigning to current x

const { check } = require("../../lib/check");

/*
Definition of singly linked list:
class ListNode{
    constructor(x, next){
        this.data = x;
        this.next = next;
    }
}
*/

/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

class Solution {
    deleteNodeWithValueX(head, x) {
      x.val = x.next.val;
      x.next = x.next.next;
      return head;
    }
}

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
