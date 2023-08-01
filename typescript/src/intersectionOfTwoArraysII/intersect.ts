export function intersect(nums1: number[], nums2: number[]): number[] {
  // Create a hash table to count duplicate elements
  const map: Map<number, number> = new Map();

  // Populate the hash table with values ​​from the first array
  for (const num of nums1) {
    map.set(num, (map.get(num) || 0) + 1);
  }

  const result: number[] = [];

  // Iterate over the second array and check if there are elements in the hash table
  // If there are, add them to the result and reduce the number in the hash table
  for (const num of nums2) {
    const count = map.get(num);
    if (count && count > 0) {
      result.push(num);
      map.set(num, count - 1);
    }
  }

  return result;
}
