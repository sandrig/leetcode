import { twoSum } from "./twoSum";

describe("Two Sum", () => {
  it("should return an empty array when input array is empty", () => {
    const nums: number[] = [];
    const target = 7;

    const expectedResult: number[] = [];

    const result = twoSum(nums, target);

    expect(result).toEqual(expectedResult);
  });

  it("should return the indices of the two numbers such that they add up to the target", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;

    const expectedResult = [0, 1];

    const result = twoSum(nums, target);

    expect(result).toEqual(expectedResult);
  });

  it("should return empty array if no two numbers add up to the target", () => {
    const nums = [3, 6, 8, 12];
    const target = 7;

    const expectedResult: number[] = [];

    const result = twoSum(nums, target);

    expect(result).toEqual(expectedResult);
  });
});
