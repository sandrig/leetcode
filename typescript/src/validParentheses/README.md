# [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

## Description

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

**Example 1:**

```
Input: s = "()"
Output: true
```

**Example 2:**

```
Input: s = "()[]{}"
Output: true
```

**Example 3:**

```
Input: s = "(]"
Output: false
```

## Solution

```typescript
function isValid(s: string): boolean {
  const stack: string[] = [];
  const openBrackets = new Set(["(", "[", "{"]);
  const bracketPairs = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (openBrackets.has(char)) {
      stack.push(char);
    } else {
      const lastBracket = stack.pop();
      if (lastBracket !== bracketPairs.get(char)) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
```

## Complexity Analysis

- Time complexity: _O(n)_
- Space complexity: _O(n)_
