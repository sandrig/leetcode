import { moveZeroes } from "./moveZeroes";

describe("Move Zeroes", () => {
  it("should move zeroes to the end while maintaining the order of other elements", () => {
    const nums1 = [0, 1, 0, 3, 12];
    moveZeroes(nums1);
    expect(nums1).toEqual([1, 3, 12, 0, 0]);

    const nums2 = [0, 0, 0, 1, 2, 3];
    moveZeroes(nums2);
    expect(nums2).toEqual([1, 2, 3, 0, 0, 0]);

    const nums3 = [1, 2, 3, 0, 0, 0];
    moveZeroes(nums3);
    expect(nums3).toEqual([1, 2, 3, 0, 0, 0]);

    const nums4 = [4, 0, 6, 0, 7];
    moveZeroes(nums4);
    expect(nums4).toEqual([4, 6, 7, 0, 0]);

    const nums5 = [0, 0, 0];
    moveZeroes(nums5);
    expect(nums5).toEqual([0, 0, 0]);

    const nums6 = [1, 2, 3, 4, 5];
    moveZeroes(nums6);
    expect(nums6).toEqual([1, 2, 3, 4, 5]);
  });

  it("should handle an empty array", () => {
    const nums: number[] = [];
    moveZeroes(nums);
    expect(nums).toEqual([]);
  });
});
