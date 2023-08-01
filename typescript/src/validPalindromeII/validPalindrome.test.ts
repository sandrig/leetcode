import { validPalindrome } from "./validPalindrome";

describe("Valid Palindrome II", () => {
  it("should return true for a valid palindrome", () => {
    expect(validPalindrome("aba")).toBe(true);
    expect(validPalindrome("abccba")).toBe(true);
    expect(validPalindrome("racecar")).toBe(true);
    expect(validPalindrome("deified")).toBe(true);
  });

  it("should return true for a valid palindrome when one character is removed", () => {
    expect(validPalindrome("abca")).toBe(true);
    expect(validPalindrome("abcba")).toBe(true);
    expect(validPalindrome("abccbad")).toBe(true);
    expect(validPalindrome("radarz")).toBe(true);
  });

  it("should return false when more than one character is removed", () => {
    expect(validPalindrome("abcde")).toBe(false);
    expect(validPalindrome("levellee")).toBe(false);
    expect(validPalindrome("radarza")).toBe(false);
    expect(validPalindrome("racecarara")).toBe(false);
  });
});
