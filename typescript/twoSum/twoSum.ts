export function twoSum(nums: number[], target: number): number[] {
  let seen: { [key: string]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    if (target - nums[i] in seen) {
      return [seen[target - nums[i]], i];
    }

    seen[nums[i]] = i;
  }

  return [];
}
