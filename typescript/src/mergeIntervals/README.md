# [Merge Intervals](https://leetcode.com/problems/merge-intervals/)

## Description

Given an array of **intervals** where **intervals[i] = [starti, endi]**, merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

**Example 1:**

```
Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].
```

**Example 2:**

```
Input: intervals = [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.
```

## Solution

```typescript
function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) {
    return intervals;
  }

  // Sort intervals by starting point
  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const previousInterval = mergedIntervals[mergedIntervals.length - 1];

    // If the current interval overlaps with the previous one, merge them
    if (currentInterval[0] <= previousInterval[1]) {
      previousInterval[1] = Math.max(previousInterval[1], currentInterval[1]);
    } else {
      // Otherwise, add the current interval to the list of combined
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
}
```

## Complexity Analysis

- Time complexity: _O(n log n)_
- Space complexity: _O(n)_
