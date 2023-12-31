# [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)

## Description

Given an integer array **nums** sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

**Example 1:**

```
Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
```

**Example 2:**

```
Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
```

## Solution

```typescript
function sortedSquares(nums: number[]): number[] {
  const result: number[] = [];

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const leftSquare = nums[left] * nums[left];
    const rightSquare = nums[right] * nums[right];

    if (leftSquare >= rightSquare) {
      result.unshift(leftSquare);
      left++;
    } else {
      result.unshift(rightSquare);
      right--;
    }
  }

  return result;
}
```

## Complexity Analysis

- Time complexity: _O(n)_

- Space complexity: _O(n)_
