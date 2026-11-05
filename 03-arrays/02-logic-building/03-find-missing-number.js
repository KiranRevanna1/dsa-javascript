/*
 * Problem: Missing Number
 *
 * Given an array containing n distinct numbers from 0 to n,
 * find the one number that is missing.
 *
 * Approach: Expected Sum
 *
 * Formula:
 * S = n * (n + 1) / 2
 *
 * Logic:
 * 1. Calculate the expected sum of numbers from 0 to n.
 * 2. Calculate the actual sum of array elements.
 * 3. Subtract actual sum from expected sum.
 * 4. The difference is the missing number.
 *
 * Example:
 * Input: [3, 0, 1]
 *
 * n = 3
 *
 * Expected Sum:
 * S = 3 * (3 + 1) / 2
 * S = 12 / 2 = 6
 *
 * Actual Sum:
 * 3 + 0 + 1 = 4
 *
 * Missing Number:
 * 6 - 4 = 2
 *
 * Output: 2
 */

var missingNumber = function(nums) {
    const n = nums.length;

    const expectedSum = n * (n + 1) / 2;

    let actualSum = 0;

    for (let i = 0; i < n; i++) {
        actualSum += nums[i];
    }

    return expectedSum - actualSum;
};

// Example
const nums = [3, 0, 1];
console.log(missingNumber(nums)); // Output: 2

/*
 * Time Complexity: O(n)
 * Auxiliary Space Complexity: O(1)
 */
