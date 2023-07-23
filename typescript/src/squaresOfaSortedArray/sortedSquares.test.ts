import { sortedSquares } from "./sortedSquares";

describe("Squares of a Sorted Array", () => {
  it("should return squares of sorted array when input contains positive and negative integers", () => {
    const nums = [-4, -1, 0, 3, 10];
    const expected = [0, 1, 9, 16, 100];
    const result = sortedSquares(nums);
    expect(result).toEqual(expected);
  });

  it("should return squares of sorted array when input contains all positive integers", () => {
    const nums = [1, 2, 3, 4, 5];
    const expected = [1, 4, 9, 16, 25];
    const result = sortedSquares(nums);
    expect(result).toEqual(expected);
  });

  it("should return squares of sorted array when input contains all negative integers", () => {
    const nums = [-5, -4, -3, -2, -1];
    const expected = [1, 4, 9, 16, 25];
    const result = sortedSquares(nums);
    expect(result).toEqual(expected);
  });

  it("should return squares of sorted array when input contains a mix of positive and negative integers", () => {
    const nums = [-7, -3, -1, 4, 5, 9];
    const expected = [1, 9, 16, 25, 49, 81];
    const result = sortedSquares(nums);
    expect(result).toEqual(expected);
  });

  it("should return squares of sorted array when input contains a single element", () => {
    const nums = [0];
    const expected = [0];
    const result = sortedSquares(nums);
    expect(result).toEqual(expected);
  });

  it("should return an empty array when input is an empty array", () => {
    const nums: number[] = [];
    const expected: number[] = [];
    const result = sortedSquares(nums);
    expect(result).toEqual(expected);
  });
});
