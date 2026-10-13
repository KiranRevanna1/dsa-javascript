// Problem: Traversal in Linked List
// Link: see Striver A2Z sheet → Linked List → Fundamentals Single LL
// In my words:
// Pattern:            | Time O(n), Space O(n)
// Key idea: head is the first node in LL and it also holds entry point to all the element of LL using .next we can travese it

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
 * @return {Array}
 */

class Solution {
    LLTraversal(head) {
      let result = []
      let current = head;
      while(current != null){
        result.push(current.data);
        current = current.next 
      }
      return result; 
    }
}

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
