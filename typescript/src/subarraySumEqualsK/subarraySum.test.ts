import { subarraySum } from "./subarraySum";

describe("Subarray Sum Equals K", () => {
  it("should return the correct number of subarrays with sum equal to k", () => {
    expect(subarraySum([1, 1, 1], 2)).toBe(2);
    expect(subarraySum([1, 2, 3], 3)).toBe(2);
    expect(subarraySum([1, 2, 3, -3, 4], 4)).toBe(2);
  });

  it("should return 0 if there are no subarrays with sum equal to k", () => {
    expect(subarraySum([1, 2, 3], 10)).toBe(0);
  });

  it("should work with negative numbers", () => {
    expect(subarraySum([-1, -2, -3, -4], -3)).toBe(2);
  });

  it("should work with an empty array", () => {
    expect(subarraySum([], 0)).toBe(0);
  });
});
