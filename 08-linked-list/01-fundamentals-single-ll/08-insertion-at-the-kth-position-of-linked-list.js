// Problem: Insertion at the Kth position of Linked List
// Link: https://takeuforward.org/blogs/data-structure-and-algorithm/insert-node-at-kth-position-in-linked-list
// In my words:
// Pattern:            | Time O(?), Space O(?)
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
 * @param {number} x
 * @param {number} k
 * @return {ListNode}
 */

class Solution {
    insertAtKthPosition(head, x, k) {
      //your code goes here
      let newNode = new ListNode(x)
      if(k===1){
        newNode.next = head;
        return newNode;
      }
      let current = head
      for(let i=1; i<k-1; i++){
        current = current.next
      }
        newNode.next = current.next
        current.next = newNode
      return head;
    }
}
// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
