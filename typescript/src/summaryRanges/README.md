# [Summary Ranges](https://leetcode.com/problems/summary-ranges/)

## Description

You are given a sorted unique integer array **nums**.

A range **[a,b]** is the set of all integers from **a** to **b** (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of **nums** is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in **nums**.

Each range **[a,b]** in the list should be output as:

- **"a->b"** if **a != b**
- **"a"** if **a == b**

**Example 1:**

```
Input: nums = [0,1,2,4,5,7]
Output: ["0->2","4->5","7"]
Explanation: The ranges are:
[0,2] --> "0->2"
[4,5] --> "4->5"
[7,7] --> "7"
```

**Example 2:**

```
Input: nums = [0,2,3,4,6,8,9]
Output: ["0","2->4","6","8->9"]
Explanation: The ranges are:
[0,0] --> "0"
[2,4] --> "2->4"
[6,6] --> "6"
[8,9] --> "8->9"
```

## Solution

```typescript
// Solution 1
function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) return [];

  const result: string[] = [];
  let start = nums[0];
  let end = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === end + 1) {
      end = nums[i];
    } else {
      if (start === end) {
        result.push(`${start}`);
      } else {
        result.push(`${start}->${end}`);
      }
      start = nums[i];
      end = nums[i];
    }
  }

  if (start === end) {
    result.push(`${start}`);
  } else {
    result.push(`${start}->${end}`);
  }

  return result;
}

// Solution 2
function summaryRanges(nums: number[]): string[] {
  const result: string[] = [];

  let i = 0;
  while (i < nums.length) {
    let start = nums[i];
    let end = start;

    while (i + 1 < nums.length && nums[i + 1] === end + 1) {
      end = nums[i + 1];
      i++;
    }

    if (start === end) {
      result.push(`${start}`);
    } else {
      result.push(`${start}->${end}`);
    }

    i++;
  }

  return result;
}
```

## Complexity Analysis

- Time complexity: _O(n)_
- Space complexity: _O(n)_
