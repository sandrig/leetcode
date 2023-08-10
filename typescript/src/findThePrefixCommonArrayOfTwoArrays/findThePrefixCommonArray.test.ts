import { findThePrefixCommonArray } from "./findThePrefixCommonArray";

describe("Find the Prefix Common Array of Two Arrays", () => {
  it("should return the correct prefix common array", () => {
    const A = [1, 3, 2, 4];
    const B = [3, 1, 2, 4];
    const expected = [0, 2, 3, 4];
    const result = findThePrefixCommonArray(A, B);
    expect(result).toEqual(expected);
  });

  it("should handle empty arrays", () => {
    const A: number[] = [];
    const B: number[] = [];
    const expected: number[] = [];
    const result = findThePrefixCommonArray(A, B);
    expect(result).toEqual(expected);
  });

  it("should handle arrays with a single element", () => {
    const A = [1];
    const B = [1];
    const expected = [1];
    const result = findThePrefixCommonArray(A, B);
    expect(result).toEqual(expected);
  });

  it("should handle arrays with all unique elements", () => {
    const A = [1, 2, 3, 4];
    const B = [5, 6, 7, 8];
    const expected = [0, 0, 0, 0];
    const result = findThePrefixCommonArray(A, B);
    expect(result).toEqual(expected);
  });
});
