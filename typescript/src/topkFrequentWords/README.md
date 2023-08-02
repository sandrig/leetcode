# [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/)

## Description

Given an array of strings **words** and an integer **k**, return the **k** most frequent strings.

Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.

**Example 1:**

```
Input: words = ["i","love","leetcode","i","love","coding"], k = 2
Output: ["i","love"]
Explanation: "i" and "love" are the two most frequent words.
Note that "i" comes before "love" due to a lower alphabetical order.
```

**Example 2:**

```
Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
Output: ["the","is","sunny","day"]
Explanation: "the", "is", "sunny" and "day" are the four most frequent words, with the number of occurrence being 4, 3, 2 and 1 respectively.
```

## Solution

```typescript
function topKFrequent(words: string[], k: number): string[] {
  // Create a hash table to count the frequency of words
  const wordFrequencyMap: Map<string, number> = new Map();

  // Populate the hash table
  for (const word of words) {
    const count = wordFrequencyMap.get(word) || 0;
    wordFrequencyMap.set(word, count + 1);
  }

  // Create an array of [word, frequency] pairs from a hash table
  const wordFrequencyArray: [string, number][] = Array.from(wordFrequencyMap);

  // Sort the array in descending frequency
  wordFrequencyArray.sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    } else {
      // If frequencies are equal, sort alphabetically
      return a[0].localeCompare(b[0]);
    }
  });

  // Choose k most frequently occurring words
  const result: string[] = wordFrequencyArray
    .slice(0, k)
    .map((pair) => pair[0]);

  return result;
}
```

## Complexity Analysis

- Time complexity: _O(n log n)_
- Space complexity: _O(n + k)_

n - the number of words in the input array;
k - the number of most frequently occurring words;
