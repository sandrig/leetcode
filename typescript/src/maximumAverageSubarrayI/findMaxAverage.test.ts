import { findMaxAverage } from "./findMaxAverage";

describe("Maximum Average Subarray I", () => {
  it("should return the maximum average for a valid input array", () => {
    const nums1 = [1, 12, -5, -6, 50, 3];
    const k1 = 4;
    expect(findMaxAverage(nums1, k1)).toBeCloseTo(12.75);

    const nums2 = [5, 7, 2, 8, 9, 1, 3];
    const k2 = 3;
    expect(findMaxAverage(nums2, k2)).toBeCloseTo(8);

    const nums3 = [0, 0, 0, 0, 0];
    const k3 = 3;
    expect(findMaxAverage(nums3, k3)).toBeCloseTo(0);
  });

  it("should return the same element value when k is 1", () => {
    const nums4 = [2, 3, 4, 6, 1];
    const k4 = 1;
    expect(findMaxAverage(nums4, k4)).toBeCloseTo(6);

    const nums5 = [-5];
    const k5 = 1;
    expect(findMaxAverage(nums5, k5)).toBeCloseTo(-5);
  });

  it("should return 0 when k is greater than the length of the input array", () => {
    const nums6 = [10, 20, 30, 40, 50];
    const k6 = 6;
    expect(findMaxAverage(nums6, k6)).toBeCloseTo(0);

    const nums7: number[] = [];
    const k7 = 1;
    expect(findMaxAverage(nums7, k7)).toBeCloseTo(0);
  });
});
