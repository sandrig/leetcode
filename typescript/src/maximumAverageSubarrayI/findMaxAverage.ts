export function findMaxAverage(nums: number[], k: number): number {
  if (k > nums.length) {
    // Return 0 if k is greater than the length of the array
    return 0;
  }

  let maxSum = 0;
  let currentSum = 0;

  // Calculate the sum of the first k elements
  for (let i = 0; i < k; i++) {
    currentSum += nums[i];
  }

  maxSum = currentSum;

  // Calculate the sum of the remaining subarrays
  for (let i = k; i < nums.length; i++) {
    currentSum += nums[i] - nums[i - k];
    // Add the next element and remove the first element of the previous subarray
    maxSum = Math.max(maxSum, currentSum);
  }

  // Return the maximum average
  return maxSum / k;
}
