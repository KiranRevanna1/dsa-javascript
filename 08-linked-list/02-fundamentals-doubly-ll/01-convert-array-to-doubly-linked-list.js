// Problem: Convert Array to Doubly Linked List
/* Remember this pattern
- head stays at the first node.
- tail tracks the last node.
- tail.next = newNode connects forward.
- newNode.prev = tail connects backward.
- tail = newNode advances the tail.
Complexity: Time (O(n)), auxiliary space (O(1)), excluding the (O(n)) space required for the newly created nodes.
*/

const { check } = require("../../lib/check");

class Solution {
    arrayToDoublyLinkedList(arr) {
        let n = arr.length;
        if (n === 0) return null;
        let head = new ListNode(arr[0]);
        let tail = head;
        for (let i = 1; i < n; i++) {
            const newNode = new ListNode(arr[i]);
            tail.next = newNode;
            newNode.prev = tail;
            tail = newNode;
        }
        return head;
    }
}


// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
