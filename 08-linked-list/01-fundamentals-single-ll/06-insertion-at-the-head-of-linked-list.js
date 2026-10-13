// Problem: Insertion at the head of Linked List
// Link: https://takeuforward.org/blogs/data-structure-and-algorithm/insert-a-node-at-the-beginning-of-a-singly-linked-list
// In my words:
// Pattern:            | Time O(?), Space O(?)
// Key idea: create a new node with object and then assign thee head to newNode.next and return newNode

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
    insertAtHead(head, x) {
        const newNode = new ListNode(x);
        newNode.next = head;
        return newNode;
    }
}

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
