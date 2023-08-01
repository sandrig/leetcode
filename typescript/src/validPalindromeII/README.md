# [Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/)

## Description

Given a string **s**, return **true** if the **s** can be palindrome after deleting at most one character from it.

**Example 1:**

```
Input: s = "aba"
Output: true
```

**Example 2:**

```
Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
```

**Example 3:**

```
Input: s = "abc"
Output: false
```

## Solution

```typescript
function validPalindrome(s: string): boolean {
  function isPalindromeRange(start: number, end: number): boolean {
    while (start < end) {
      if (s[start] !== s[end]) {
        return false;
      }
      start++;
      end--;
    }
    return true;
  }

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      // Try skipping the left character or the right character
      return (
        isPalindromeRange(left + 1, right) || isPalindromeRange(left, right - 1)
      );
    }
    left++;
    right--;
  }

  return true;
}
```

## Complexity Analysis

- Time complexity: _O(n)_
- Space complexity: _O(1)_
