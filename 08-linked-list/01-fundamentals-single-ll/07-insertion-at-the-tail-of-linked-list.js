// Problem: Insertion at the tail of Linked List
// Link: see Striver A2Z sheet → Linked List → Fundamentals Single LL
// In my words:
// Pattern:            | Time O(n), Space O(1)
// Key idea: find the current.next = null node and assign current.next = newNode

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
    insertAtTail(head, x) {
      const newNode = new ListNode(x);
       if(head === null){
            return newNode;
        }
      let current = head
      while(current.next !== null){
        current = current.next 
      }
      current.next = newNode
      return head;
    }
}
// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
