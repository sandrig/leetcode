export function maximumProduct(nums: number[]): number {
  if (nums.length < 3) {
    return 0;
  }

  // First sort the array in ascending order
  nums.sort((a, b) => a - b);

  const n = nums.length;

  // Product of three maximum elements
  const product1 = nums[n - 1] * nums[n - 2] * nums[n - 3];

  // The product of two minimum elements and a maximum element
  const product2 = nums[0] * nums[1] * nums[n - 1];

  // Return the maximum of the two products found
  return Math.max(product1, product2);
}
