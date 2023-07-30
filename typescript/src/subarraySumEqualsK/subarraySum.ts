export function subarraySum(nums: number[], k: number): number {
  let count = 0;
  let sum = 0;

  const sumOccurrences = new Map<number, number>();
  // Initial value for the case when the subarray starts at the first element
  sumOccurrences.set(0, 1);

  for (const num of nums) {
    sum += num;

    if (sumOccurrences.has(sum - k)) {
      // If the sum of the current subarray minus k was encountered earlier, then there is a subarray with sum k
      count += sumOccurrences.get(sum - k) || 0;
    }

    sumOccurrences.set(sum, (sumOccurrences.get(sum) || 0) + 1);
  }

  return count;
}
