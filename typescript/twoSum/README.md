# [Two Sum](https://leetcode.com/problems/two-sum/)

## Description

Given an array of integers, return **indices** of the two numbers such that they add up to a specific target.

You may assume that each input would have **_exactly_** one solution, and you may not use the same element twice.

**Example 1:**

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
```

**Example 2:**

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

**Example 3:**

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

**Tags:** Array, Hash Table

## Solution

```typescript
function twoSum(nums: number[], target: number): number[] {
  let seen: { [key: string]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in seen) {
      return [seen[target - nums[i]], i];
    }

    seen[nums[i]] = i;
  }

  return [];
}
```

## Complexity

- Time Complexity: O(n)
- Space Complexity: O(n)
