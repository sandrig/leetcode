export function moveZeroes(nums: number[]): void {
  let nonZeroIndex = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      if (i !== nonZeroIndex) {
        // Swap the non-zero element with the element at nonZeroIndex
        const temp = nums[nonZeroIndex];
        nums[nonZeroIndex] = nums[i];
        nums[i] = temp;
      }
      nonZeroIndex++;
    }
  }
}
