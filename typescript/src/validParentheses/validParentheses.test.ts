import { isValid } from "./validParentheses";

describe("Valid Parentheses", () => {
  it("should return true for valid pairs of parentheses", () => {
    expect(isValid("()")).toBe(true);
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("{[()]}")).toBe(true);
    expect(isValid("{[]}")).toBe(true);
  });

  it("should return false for invalid pairs of parentheses", () => {
    expect(isValid("(]")).toBe(false);
    expect(isValid("([)]")).toBe(false);
    expect(isValid("}")).toBe(false);
    expect(isValid("[({})")).toBe(false);
  });

  it("should handle empty string as valid", () => {
    expect(isValid("")).toBe(true);
  });

  it("should handle strings without parentheses as valid", () => {
    expect(isValid("Hello, World!")).toBe(true);
  });
});
