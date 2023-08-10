import { findAnagrams } from "./findAnagrams";

describe("Find All Anagrams in a String", () => {
  it("should find all anagrams in the string", () => {
    const s = "cbaebabacd";
    const p = "abc";
    const result = findAnagrams(s, p);
    expect(result).toEqual(expect.arrayContaining([0, 6]));
  });

  it("should handle edge case with empty strings", () => {
    const s = "";
    const p = "";
    const result = findAnagrams(s, p);
    expect(result).toEqual([]);
  });

  it("should not find anagrams if they do not exist", () => {
    const s = "hello";
    const p = "abc";
    const result = findAnagrams(s, p);
    expect(result).toEqual([]);
  });

  it("should find anagrams when p is longer than s", () => {
    const s = "abc";
    const p = "abcde";
    const result = findAnagrams(s, p);
    expect(result).toEqual([]);
  });
});
