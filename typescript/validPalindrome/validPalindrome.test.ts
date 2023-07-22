import { isPalindrome } from "./validPalindrome";

describe("Valid Palindrome", () => {
  it("should return true for a valid palindrome with spaces and punctuation", () => {
    const test1 = "A man, a plan, a canal: Panama";
    expect(isPalindrome(test1)).toBe(true);
  });

  it("should return false for a non-palindrome", () => {
    const test2 = "race a car";
    expect(isPalindrome(test2)).toBe(false);
  });

  it("should return true for a valid palindrome with different case letters", () => {
    const test3 = "Able was I ere I saw Elba";
    expect(isPalindrome(test3)).toBe(true);
  });

  it("should return true for a single character", () => {
    const test4 = "a";
    expect(isPalindrome(test4)).toBe(true);
  });

  it("should return true for an empty string", () => {
    const test5 = "";
    expect(isPalindrome(test5)).toBe(true);
  });

  it("should return false for a non-palindrome with numbers", () => {
    const test6 = "12356321";
    expect(isPalindrome(test6)).toBe(false);
  });
});
