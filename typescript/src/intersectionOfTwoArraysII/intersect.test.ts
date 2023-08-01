import { intersect } from "./intersect";

describe("Intersection of Two Arrays II", () => {
  it("should return the correct intersection for non-empty arrays", () => {
    const nums1 = [1, 2, 2, 1];
    const nums2 = [2, 2];
    expect(intersect(nums1, nums2)).toEqual([2, 2]);
  });

  it("should return an empty array when one or both input arrays are empty", () => {
    const nums1: number[] = [];
    const nums2 = [1, 2, 3];
    expect(intersect(nums1, nums2)).toEqual([]);

    const nums3 = [1, 2, 3];
    const nums4: number[] = [];
    expect(intersect(nums3, nums4)).toEqual([]);

    const nums5: number[] = [];
    const nums6: number[] = [];
    expect(intersect(nums5, nums6)).toEqual([]);
  });

  it("should return the correct intersection when there are duplicates in both arrays", () => {
    const nums1 = [4, 9, 5, 4, 2, 8, 2];
    const nums2 = [9, 4, 9, 8, 4];

    const expectedIntersection = [4, 9, 8];
    const result = intersect(nums1, nums2);

    // We sort the result and the expected array to eliminate the uncertainty of the order of the elements
    const sortedResult = result.sort((a, b) => a - b);
    const sortedExpected = expectedIntersection.sort((a, b) => a - b);

    // We check if the result contains all the elements from the expected array
    expect(sortedResult).toEqual(expect.arrayContaining(sortedExpected));
  });

  it("should return the correct intersection when both arrays have the same elements", () => {
    const nums1 = [1, 2, 3, 4];
    const nums2 = [4, 3, 2, 1];

    const expectedIntersection = [1, 2, 3, 4];
    const result = intersect(nums1, nums2);

    expect(result).toEqual(expect.arrayContaining(expectedIntersection));
  });

  it("should return an empty array when there is no intersection", () => {
    const nums1 = [1, 2, 3];
    const nums2 = [4, 5, 6];
    expect(intersect(nums1, nums2)).toEqual([]);
  });
});
