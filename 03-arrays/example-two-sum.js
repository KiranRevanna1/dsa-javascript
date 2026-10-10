// Problem: Two Sum — https://leetcode.com/problems/two-sum/
// Pattern: hashmap lookup | Time O(n), Space O(n)
// Key idea: for each number, check if (target - num) was already seen
// (Example file to show the format. Delete it once you've added your own.)

const { check } = require("../lib/check");

function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i < nums.length; i++) {
    const need = target - nums[i];
    if (seen.has(need)) return [seen.get(need), i];
    seen.set(nums[i], i);
  }
  return [];
}

check(twoSum([2, 7, 11, 15], 9), [0, 1], "example 1");
check(twoSum([3, 2, 4], 6), [1, 2], "example 2");
check(twoSum([3, 3], 6), [0, 1], "duplicates");
