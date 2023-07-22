# [Move Zeroes](https://leetcode.com/problems/move-zeroes/)

## Description

Given an integer array **nums**, move all **0**'s to the end of it while maintaining the relative order of the non-zero elements.

Note that you must do this in-place without making a copy of the array.

**Example 1:**

```
Input: nums = [0,1,0,3,12]
Output: [1,3,12,0,0]
```

**Example 2:**

```
Input: nums = [0]
Output: [0]
```

## Solution

```typescript
function moveZeroes(nums: number[]): void {
  let nonZeroIndex = 0;

  // First, move all non-zero elements to the front of the array
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[nonZeroIndex] = nums[i];
      nonZeroIndex++;
    }
  }

  // Then, fill the rest of the array with zeroes
  while (nonZeroIndex < nums.length) {
    nums[nonZeroIndex] = 0;
    nonZeroIndex++;
  }
}
```

## Complexity Analysis

- Time complexity: _O(n)_

- Space complexity: _O(1)_
