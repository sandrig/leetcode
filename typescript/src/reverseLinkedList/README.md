# [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)

## Description

Given the **head** of a singly linked list, reverse the list, and return the reversed list.

**Example 1:**

![linked list](https://assets.leetcode.com/uploads/2021/02/19/rev1ex1.jpg)

```
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
```

**Example 2:**

![linked list](https://assets.leetcode.com/uploads/2021/02/19/rev1ex2.jpg)

```
Input: head = [1,2]
Output: [2,1]
```

**Example 3:**

```
Input: head = []
Output: []
```

## Solution

```typescript
function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let current: ListNode | null = head;

  while (current !== null) {
    const nextNode: ListNode | null = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  return prev;
}
```

## Complexity Analysis

- Time complexity: _O(n)_
- Space complexity: _O(1)_
