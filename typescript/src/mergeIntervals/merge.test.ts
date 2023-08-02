import { merge } from "./merge";

describe("Merge Intervals", () => {
  it("should merge overlapping intervals", () => {
    const input = [
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18],
    ];
    const expectedOutput = [
      [1, 6],
      [8, 10],
      [15, 18],
    ];
    expect(merge(input)).toEqual(expectedOutput);
  });

  it("should return the original intervals if they do not overlap", () => {
    const input = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ];
    const expectedOutput = [
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
    ];
    expect(merge(input)).toEqual(expectedOutput);
  });

  it("should merge all intervals if they fully overlap", () => {
    const input = [
      [1, 10],
      [2, 9],
      [3, 8],
      [4, 7],
    ];
    const expectedOutput = [[1, 10]];
    expect(merge(input)).toEqual(expectedOutput);
  });

  it("should return an empty list for an empty input list of intervals", () => {
    const input: number[][] = [];
    const expectedOutput: number[][] = [];
    expect(merge(input)).toEqual(expectedOutput);
  });
});
