// Problem: Merge Sorting
// Link: https://takeuforward.org/blogs/data-structure-and-algorithm/merge-sort-algorithm
// In my words: 
// Pattern:divide into halves, then merge sorted halves. | Time O(nlogn), Space O(n)
// Key idea:

const { check } = require("../../lib/check");


class Solution {
    mergeSort(nums) {
        function merge(arr, low, mid, high) {
            const temp = [];
            let left = low;
            let right = mid + 1;

            // Compare elements from both sorted halves
            while (left <= mid && right <= high) {
                if (arr[left] <= arr[right]) {
                    temp.push(arr[left]);
                    left++;
                } else {
                    temp.push(arr[right]);
                    right++;
                }
            }

            // Copy remaining elements from the left half
            while (left <= mid) {
                temp.push(arr[left]);
                left++;
            }

            // Copy remaining elements from the right half
            while (right <= high) {
                temp.push(arr[right]);
                right++;
            }

            // Copy merged result back into the original array
            for (let i = 0; i < temp.length; i++) {
                arr[low + i] = temp[i];
            }
        }

        function divide(arr, low, high) {
            if (low >= high) return;

            const mid = Math.floor((low + high) / 2);

            divide(arr, low, mid);
            divide(arr, mid + 1, high);

            merge(arr, low, mid, high);
        }

        divide(nums, 0, nums.length - 1);
        return nums;
    }
}

// Tests: problem examples + 1 edge case (uncomment and fill)
// check(solve(/* input */), /* expected */, "example 1");
// check(solve(/* input */), /* expected */, "example 2");
// check(solve(/* edge case */), /* expected */, "edge case");
