// Problem: Insert node before kth node in Doubly Linked List
// Link: see Striver A2Z sheet → Linked List → Fundamentals Doubly LL
// In my words:
// Pattern:            | Time O(n), Space O(1)
// Key idea: When changing pointers, preserve the old reference until you've finished using it.

const { check } = require("../../lib/check");

insertBeforeKthPosition(head, X, K) {
    if (K < 1) return head;

    let newNode = new ListNode(X);

    if (head === null) {
        return K === 1 ? newNode : head;
    }

    if (K === 1) {
        newNode.next = head;
        head.prev = newNode;
        return newNode;
    }

    let current = head;

    for (let i = 1; i < K; i++) {
        current = current.next;

        if (current === null) return head;
    }

    newNode.prev = current.prev;
    newNode.next = current;

    current.prev.next = newNode;
    current.prev = newNode;

    return head;
}

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
