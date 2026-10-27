// Problem: Removing given node in Doubly Linked List
// Link: see Striver A2Z sheet → Linked List → Fundamentals Doubly LL
// In my words:
/* Pattern:    
  You receive node 3.
  1. node.prev.next = node.next connects node 2 to node 4.
  2. node.next.prev = node.prev connects node 4 back to node 2.
  Result: 1 ⇄ 2 ⇄ 4
    Complexity
    - Time: (O(1))
    - Auxiliary space: (O(1))
*/
// Key idea:

const { check } = require("../../lib/check");


class Solution {
    deleteGivenNode(node) {
        if (node.prev !== null) {
            node.prev.next = node.next;
        }

        if (node.next !== null) {
            node.next.prev = node.prev;
        }
    }
}


// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
