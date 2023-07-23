# [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)

## Description

You are given the heads of two sorted linked lists **list1** and **list2**.

Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

Return the head of the merged linked list.

**Example 1:**

![linked list](https://assets.leetcode.com/uploads/2020/10/03/merge_ex1.jpg)

```
Input: list1 = [1,2,4], list2 = [1,3,4]
Output: [1,1,2,3,4,4]
```

**Example 2:**

```
Input: list1 = [], list2 = []
Output: []
```

**Example 3:**

```
Input: list1 = [], list2 = [0]
Output: [0]
```

## Solution

```typescript
// List node definition
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function mergeTwoLists(
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // Create a new linked list that will contain the merged nodes
  const dummyHead = new ListNode(-1);
  let current = dummyHead;

  // We continue to merge nodes until there is at least one node in each list
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // If there are nodes in the first list, add them to the end of the new list
  if (l1 !== null) {
    current.next = l1;
  }

  // If there are nodes in the second list, add them to the end of the new list
  if (l2 !== null) {
    current.next = l2;
  }

  return dummyHead.next;
}
```

## Complexity Analysis

- Time complexity: _O(n)_
- Space complexity: _O(n)_
