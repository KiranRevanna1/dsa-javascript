// Problem: Deletion of the tail of Linked List
// Link: see Striver A2Z sheet → Linked List → Fundamentals Single LL
// In my words:
// Pattern: find the last second node and make .next = null | Time O(n), Space O(1)
// Key idea:

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
 * @return {ListNode}
 */

class Solution {
    deleteTail(head) {
      if(head === null || head.next === null){
        return null
      }
      let current = head;
      while(current.next.next != null){
        current = current.next
      }
      current.next = null
      return head;
    }
}

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
