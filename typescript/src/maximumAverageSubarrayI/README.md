# [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)

## Description

You are given an integer array **nums** consisting of **n** elements, and an integer **k**.

Find a contiguous subarray whose length is equal to **k** that has the maximum average value and return this value. Any answer with a calculation error less than **10^5** will be accepted.

**Example 1:**

```
Input: nums = [1,12,-5,-6,50,3], k = 4
Output: 12.75000
Explanation: Maximum average is (12 - 5 - 6 + 50) / 4 = 51 / 4 = 12.75
```

**Example 2:**

```
Input: nums = [5], k = 1
Output: 5.00000
```

## Solution

```typescript
function findMaxAverage(nums: number[], k: number): number {
  if (k > nums.length) {
    // Return 0 if k is greater than the length of the array
    return 0;
  }

  let maxSum = 0;
  let currentSum = 0;

  // Calculate the sum of the first k elements
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  maxSum = currentSum;

  // Calculate the sum of the remaining subarrays
  for (let i = k; i < nums.length; i++) {
    currentSum += nums[i] - nums[i - k];
    // Add the next element and remove the first element of the previous subarray
    maxSum = Math.max(maxSum, currentSum);
  }

  // Return the maximum average
  return maxSum / k;
}
```

## Complexity Analysis

- Time complexity: _O(n)_
- Space complexity: _O(1)_
