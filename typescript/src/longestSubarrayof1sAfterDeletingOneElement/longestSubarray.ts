export function longestSubarray(nums: number[]): number {
  let left = 0;
  let right = 0;
  let maxLen = 0;
  let zeroCount = 0;

  while (right < nums.length) {
    if (nums[right] === 0) {
      zeroCount++;
    }

    while (zeroCount > 1) {
      if (nums[left] === 0) {
        zeroCount--;
      }
      left++;
    }

    maxLen = Math.max(maxLen, right - left);

    right++;
  }

  return maxLen;
}
