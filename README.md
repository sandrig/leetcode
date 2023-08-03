# LeetCode solutions

## Easy

| #   | Problem                                                                                             | Solution                                                                                                            | Time       | Space          | Tag                                                     |
| --- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- | ---------- | -------------- | ------------------------------------------------------- |
| 1   | [Two Sum](https://leetcode.com/problems/two-sum/)                                                   | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/twoSum/README.md)                       | _O(n)_     | _O(n)_         | Array, Hash Table                                       |
| 2   | [Move Zeroes](https://leetcode.com/problems/move-zeroes/)                                           | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/moveZeroes/README.md)                   | _O(n)_     | _O(1)_         | Array, Two Pointers                                     |
| 3   | [Valid Palindrome](https://leetcode.com/problems/valid-palindrome/)                                 | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/validPalindrome/README.md)              | _O(n)_     | _O(n)_         | String, Two Pointers                                    |
| 4   | [Summary Ranges](https://leetcode.com/problems/summary-ranges/)                                     | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/summaryRanges/README.md)                | _O(n)_     | _O(n)_         | Array                                                   |
| 5   | [Merge Two Sorted Lists](https://leetcode.com/problems/merge-two-sorted-lists/)                     | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/mergeTwoSortedLists/README.md)          | _O(n + m)_ | _O(1)_         | Linked List, Recursion                                  |
| 6   | [Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)               | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/squaresOfaSortedArray/README.md)        | _O(n)_     | _O(n)_         | Array, Two Pointers, Sorting                            |
| 7   | [Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/)                           | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/reverseLinkedList/README.md)            | _O(n)_     | _O(1)_         | Linked List, Recursion                                  |
| 8   | [Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)                               | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/validParentheses/README.md)             | _O(n)_     | _O(n)_         | String, Stack                                           |
| 9   | [Maximum Product of Three Numbers](https://leetcode.com/problems/maximum-product-of-three-numbers/) | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/maximumProductofThreeNumbers/README.md) | _O(nlogn)_ | _O(1)_         | Array, Math, Sorting                                    |
| 10  | [Maximum Average Subarray I](https://leetcode.com/problems/maximum-average-subarray-i/)             | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/maximumAverageSubarrayI/README.md)      | _O(n)_     | _O(1)_         | Array, Sliding Window                                   |
| 11  | [Intersection of Two Arrays II](https://leetcode.com/problems/intersection-of-two-arrays-ii/)       | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/intersectionOfTwoArraysII/README.md)    | _O(n + m)_ | _O(min(n, m))_ | Array, Hash Table, Two Pointers, Binary Search, Sorting |
| 12  | [Valid Palindrome II](https://leetcode.com/problems/valid-palindrome-ii/)                           | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/validPalindromeII/README.md)            | _O(n)_     | _O(1)_         | Two Pointers, String Greedy                             |

## Medium

| #   | Problem                                                                                                                                | Solution                                                                                                                          | Time             | Space      | Tag                                                                             |
| --- | -------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- | ---------------- | ---------- | ------------------------------------------------------------------------------- |
| 1   | [String Compression](https://leetcode.com/problems/string-compression/)                                                                | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/stringCompression/README.md)                          | _O(n)_           | _O(n)_     | Two Pointers, String                                                            |
| 2   | [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)                                                                      | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/addTwoNumbers/README.md)                              | _O(n)_           | _O(1)_     | Linked List, Math, Recursion                                                    |
| 3   | [Insert Delete GetRandom O(1)](https://leetcode.com/problems/insert-delete-getrandom-o1/)                                              | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/insertDeleteGetRandom/README.md)                      | _O(1)_           | _O(n)_     | Array, Hash Table, Math, Design, Randomized                                     |
| 4   | [Group Anagrams](https://leetcode.com/problems/group-anagrams/)                                                                        | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/groupAnagrams/README.md)                              | _O(n\*k log(k))_ | _O(n\*K)_  | Array, Hash Table, String, Sorting                                              |
| 5   | [Subarray Sum Equals K](https://leetcode.com/problems/subarray-sum-equals-k/)                                                          | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/subarraySumEqualsK/README.md)                         | _O(n)_           | _O(n)_     | Array, Hash Table, Prefix Sum                                                   |
| 6   | [Merge Intervals](https://leetcode.com/problems/merge-intervals/)                                                                      | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/mergeIntervals/README.md)                             | _O(n log n)_     | _O(n)_     | Array, Sorting                                                                  |
| 7   | [Top K Frequent Words](https://leetcode.com/problems/top-k-frequent-words/)                                                            | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/topkFrequentWords/README.md)                          | _O(n log n)_     | _O(n + k)_ | Hash Table, String, Trie, Sorting, Heap (Priority Queue), Bucket Sort, Counting |
| 8   | [Longest Subarray of 1's After Deleting One Element](https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/) | [TypeScript](https://github.com/sandrig/leetcode/blob/master/typescript/src/longestSubarrayof1sAfterDeletingOneElement/README.md) | _O(n)_           | _O(1)_     | Array, Dynamic Programming, Sliding Window                                      |
