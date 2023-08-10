export function findThePrefixCommonArray(A: number[], B: number[]): number[] {
  const s = new Set();
  let count = 0;

  const result: number[] = A.map((_, i) => {
    count += 2;
    s.add(A[i]);
    s.add(B[i]);
    return count - s.size;
  });

  return result;
}
