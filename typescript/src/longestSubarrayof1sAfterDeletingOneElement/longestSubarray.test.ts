import { longestSubarray } from "./longestSubarray";

describe("Longest Subarray of 1's After Deleting One Element", () => {
  it("should return the length of the longest subarray after deleting one element", () => {
    expect(longestSubarray([1, 1, 0, 1, 1, 1])).toBe(5);
    expect(longestSubarray([1, 1, 1, 1])).toBe(3);
    expect(longestSubarray([0, 0, 0, 0])).toBe(0);
    expect(longestSubarray([1])).toBe(0);
    expect(longestSubarray([0])).toBe(0);
    expect(longestSubarray([0, 1, 0, 0, 1, 0, 1, 1])).toBe(3);
    expect(longestSubarray([1, 0, 0, 1, 1, 1, 0, 1, 1, 0])).toBe(5);
  });

  it("should handle edge cases", () => {
    expect(longestSubarray([])).toBe(0);
    expect(longestSubarray([1])).toBe(0);
    expect(longestSubarray([0])).toBe(0);
  });

  it("should return 0 if all elements are 0s", () => {
    expect(longestSubarray([0, 0, 0])).toBe(0);
    expect(longestSubarray([0, 0, 0, 0, 0])).toBe(0);
  });

  it("should return 0 if all elements are 1s", () => {
    expect(longestSubarray([1, 1, 1])).toBe(2);
    expect(longestSubarray([1, 1, 1, 1, 1])).toBe(4);
  });
});
