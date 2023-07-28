import { maximumProduct } from "./maximumProduct";

describe("Maximum Product of Three Numbers", () => {
  it("should return the maximum product of three numbers in the array", () => {
    const testCases = [
      { input: [1, 2, 3], output: 6 },
      { input: [1, 2, 3, 4], output: 24 },
      { input: [-1, -2, -3], output: -6 },
      { input: [-1, -2, -3, 0], output: 0 },
      { input: [10, -10, 1, 2, 3], output: 300 },
    ];

    for (const testCase of testCases) {
      const result = maximumProduct(testCase.input);
      expect(result).toBe(testCase.output);
    }
  });

  it("should return 0 if the array contains less than 3 elements", () => {
    const result = maximumProduct([1, 2]);
    expect(result).toBe(0);
  });
});
