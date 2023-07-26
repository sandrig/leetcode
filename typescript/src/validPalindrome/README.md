# [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)

## Description

A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string **s**, return **true** if it is a palindrome, or **false** otherwise.

**Example 1:**

```
Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.
```

**Example 2:**

```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.
```

**Example 3:**

```
Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
```

## Solution

Solution #1

```typescript
function isPalindrome(s: string): boolean {
  // Remove all characters except letters and numbers and convert to lowercase
  const cleanedString = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Checking if the string being cleared is a palindrome
  let left = 0;
  let right = cleanedString.length - 1;

  while (left < right) {
    if (cleanedString[left] !== cleanedString[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}
```

Solution #2

```typescript
function isPalindrome(s: string): boolean {
  // Function to check if a character is a letter or a digit
  function isAlphanumeric(char: string): boolean {
    const charCode = char.charCodeAt(0);
    return (
      (charCode >= 48 && charCode <= 57) || // Numbers 0-9
      (charCode >= 65 && charCode <= 90) || // Letters A-Z
      (charCode >= 97 && charCode <= 122) // Letters a-z
    );
  }

  // Remove all characters except letters and numbers and convert the string to lowercase
  let cleanedString = "";
  for (let i = 0; i < s.length; i++) {
    if (isAlphanumeric(s[i])) {
      cleanedString += s[i].toLowerCase();
    }
  }

  // Checking if the string being cleared is a palindrome
  let left = 0;
  let right = cleanedString.length - 1;

  while (left < right) {
    if (cleanedString[left] !== cleanedString[right]) {
      return false;
    }
    left++;
    right--;
  }

  return true;
}
```

## Complexity Analysis

- Time complexity: _O(n)_

- Space complexity: _O(n)_
