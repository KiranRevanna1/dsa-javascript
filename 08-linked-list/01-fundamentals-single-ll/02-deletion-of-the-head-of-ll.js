// Problem: Deletion of the head of LL
// Link: https://leetcode.com/problems/delete-node-in-a-linked-list/
// In my words: leetcode & TUF a2z
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
// TUF Question
class Solution {
    deleteHead(head) {
        return head === null ? null : head.next;
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
//  Delete Node in a Linked List - leetcode
var deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};



// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
