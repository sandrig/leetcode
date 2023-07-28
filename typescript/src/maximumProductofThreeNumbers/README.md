# [Maximum Product of Three Numbers](https://leetcode.com/problems/maximum-product-of-three-numbers/)

## Description

Given an integer array **nums**, find three numbers whose product is maximum and return the maximum product.

**Example 1:**

```
Input: nums = [1,2,3]
Output: 6
```

**Example 2:**

```
Input: nums = [1,2,3,4]
Output: 24
```

**Example 3:**

```
Input: nums = [-1,-2,-3]
Output: -6
```

## Solution

```typescript
function maximumProduct(nums: number[]): number {
  // First sort the array in ascending order
  nums.sort((a, b) => a - b);

  const n = nums.length;

  // Product of three maximum elements
  const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];

  // The product of two minimum elements and a maximum element
  const product2 = nums[0] * nums[1] * nums[n - 1];

  // Return the maximum of the two products found
  return Math.max(product1, product2);
}
```

## Complexity Analysis

- Time complexity: _O(n)_
- Space complexity: _O(1)_
