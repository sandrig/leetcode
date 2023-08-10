# [Maximize Distance to Closest Person](https://leetcode.com/problems/maximize-distance-to-closest-person/)

## Description

You are given an array representing a row of **seats** where **seats[i] = 1** represents a person sitting in the **i^th** seat, and **seats[i] = 0** represents that the ith seat is empty (0-indexed).

There is at least one empty seat, and at least one person sitting.

Alex wants to sit in the seat such that the distance between him and the closest person to him is maximized.

Return that maximum distance to the closest person.

![Distance](https://assets.leetcode.com/uploads/2020/09/10/distance.jpg)

**Example 1:**

```
Input: seats = [1,0,0,0,1,0,1]
Output: 2
Explanation:
If Alex sits in the second open seat (i.e. seats[2]), then the closest person has distance 2.
If Alex sits in any other open seat, the closest person has distance 1.
Thus, the maximum distance to the closest person is 2.
```

**Example 2:**

```
Input: seats = [1,0,0,0]
Output: 3
Explanation:
If Alex sits in the last seat (i.e. seats[3]), the closest person is 3 seats away.
This is the maximum distance possible, so the answer is 3.
```

**Example 3:**

```
Input: seats = [0,1]
Output: 1
```

## Solution

```typescript
function maxDistToClosest(seats: number[]): number {
  let maxDistance = 0;
  let lastPersonIndex = -1;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      if (lastPersonIndex === -1) {
        // For the distance to the first seated person
        maxDistance = Math.max(maxDistance, i);
      } else {
        maxDistance = Math.max(
          maxDistance,
          Math.floor((i - lastPersonIndex) / 2)
        );
      }
      lastPersonIndex = i;
    }
  }

  // For the distance to the last seated person
  maxDistance = Math.max(maxDistance, seats.length - 1 - lastPersonIndex);

  return maxDistance;
}
```

## Complexity Analysis

- Time complexity: _O(n)_
- Space complexity: _O(1)_
