# [Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/)

## Description

Given two integer arrays **nums1** and **nums2**, return an array of their intersection. Each element in the result must appear as many times as it shows in both arrays and you may return the result in any order.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

**Example 1:**

```
Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
```

**Example 2:**

```
Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]
Explanation: [9,4] is also accepted.
```

## Solution

```typescript
function intersect(nums1: number[], nums2: number[]): number[] {
  // Create a hash table to count duplicate elements
  const map: Map<number, number> = new Map();

  // Populate the hash table with values ​​from the first array
  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const result: number[] = [];

  // Iterate over the second array and check if there are elements in the hash table
  // If there are, add them to the result and reduce the number in the hash table
  for (const num of nums2) {
    const count = map.get(num);
    if (count && count > 0) {
      result.push(num);
      map.set(num, count - 1);
    }
  }

  return result;
}
```

## Complexity Analysis

- Time complexity: _O(n + m)_
- Space complexity: _O(min(n, m))_
