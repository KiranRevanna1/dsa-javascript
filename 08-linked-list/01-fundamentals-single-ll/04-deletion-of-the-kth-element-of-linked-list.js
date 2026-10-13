// Problem: Deletion of the Kth element of Linked List
// Link: see Striver A2Z sheet → Linked List → Fundamentals Single LL
// In my words:
// Pattern:            | Time O(k-1), Space O(1)
// Key idea: find k-1 node and make the next kth node .nex to be updated

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
 * @param {number} k
 * @return {ListNode}
 */

class Solution {
    deleteKthNode(head, k) {
      if(k===1){
        return head.next
      }
      let current = head
      for(let i=1; i<k-1;i++){
        current = current.next
      }
      current.next=current.next.next
      return head
    }
}
// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
