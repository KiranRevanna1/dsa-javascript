# Missing Number – Sum Formula

## Problem
Given an array containing `n` distinct numbers from the range `0` to `n`, find the one number that is missing.

### Approach: Expected Sum

The sum of the first `n` natural numbers starting from `0` is calculated using:

\[
S = \frac{n(n+1)}{2}
\]

Where:
- `n` = number of elements in the array.
- `S` = expected sum of all numbers from `0` to `n`.

### Logic

1. Calculate the expected sum using the formula.
2. Calculate the actual sum of all elements in the array.
3. Subtract the actual sum from the expected sum.
4. The difference is the missing number.

### Example

**Input:**
```js
nums = [3, 0, 1]
```

**Step 1: Find the expected sum**

Here, `n = 3`.

\[
S = \frac{n(n+1)}{2}
\]

\[
S = \frac{3(3+1)}{2}
\]

\[
S = \frac{12}{2} = 6
\]

**Step 2: Calculate the actual sum**

\[
ActualSum = 3 + 0 + 1 = 4
\]

**Step 3: Calculate the missing number**

\[
MissingNumber = ExpectedSum - ActualSum
\]

\[
MissingNumber = 6 - 4 = 2
\]

**Output:**
```js
2
```

### JavaScript Solution

```js
var missingNumber = function(nums) {
    const n = nums.length;

    const expectedSum = n * (n + 1) / 2;

    let actualSum = 0;

    for (let i = 0; i < n; i++) {
        actualSum += nums[i];
    }

    return expectedSum - actualSum;
};
```

### Complexity Analysis

- **Time Complexity:** O(n) — One traversal to calculate the actual sum.
- **Auxiliary Space Complexity:** O(1) — Only a constant amount of extra space is used.

### Key Takeaway

Instead of sorting the array or checking every possible number, calculate the difference between the expected sum and actual sum to find the missing number efficiently.
