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

Solution #1

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
  // Create a dummy (empty) node to serve as the head of the new list
  const dummyHead = new ListNode();
  // Pointer to the current node that will move through the new list
  let current = dummyHead;

  // Iterate over lists l1 and l2 until both lists are empty
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      // Assign the next element from l1 to the current node pointer
      current.next = l1;
      // Move the pointer l1 to the next element
      l1 = l1.next;
    } else {
      // Assign the next element from l2 to the current node pointer
      current.next = l2;
      // Move the l2 pointer to the next element
      l2 = l2.next;
    }

    // Move the current node pointer to the next node in the new list
    current = current.next;
  }

  // After the loop ends, one of the lists may remain non-empty, so we add the remaining elements, if any.
  if (l1 !== null) {
    current.next = l1;
  } else {
    current.next = l2;
  }

  // Return the head of the new list (the first element without the dummy node)
  return dummyHead.next;
}
```

## Complexity Analysis

- Time complexity: _O(n + m)_
- Space complexity: _O(1)_

Solution #2

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
  // If one of the lists is empty, then return another list
  if (!l1) {
    return l2;
  }

  if (!l2) {
    return l1;
  }

  // Select the smaller element from l1 and l2 and set it as the current node
  let current: ListNode;
  if (l1.val < l2.val) {
    current = l1;

    // Recursively call the function for the remaining nodes l1 и l2
    current.next = mergeTwoLists(l1.next, l2);
  } else {
    current = l2;

    // Recursively call the function for the remaining nodes l1 and l2
    current.next = mergeTwoLists(l1, l2.next);
  }

  return current;
}
```

## Complexity Analysis

- Time complexity: _O(n + m)_
- Space complexity: _O(n)_
