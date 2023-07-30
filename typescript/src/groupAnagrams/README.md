# [Group Anagrams](https://leetcode.com/problems/group-anagrams/)

## Description

Given an array of strings **strs**, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

**Example 1:**

```
Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
```

**Example 2:**

```
Input: strs = [""]
Output: [[""]]
```

**Example 3:**

```
Input: strs = ["a"]
Output: [["a"]]
```

## Solution

```typescript
function groupAnagrams(strs: string[]): string[][] {
  const anagramGroups: Map<string, string[]> = new Map();

  for (const str of strs) {
    const sortedStr = str.split("").sort().join("");
    if (anagramGroups.has(sortedStr)) {
      anagramGroups.get(sortedStr)?.push(str);
    } else {
      anagramGroups.set(sortedStr, [str]);
    }
  }

  return Array.from(anagramGroups.values());
}
```

## Complexity Analysis

n - is the number of words and k - is the maximum word length.

- Time complexity: _O(n\*k log(k))_
- Space complexity: _O(n\*K)_
