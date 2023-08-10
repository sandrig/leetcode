export function findAnagrams(s: string, p: string): number[] {
  const result: number[] = [];

  // Create arrays to store letter frequencies in p and current window s
  const pFreq: number[] = new Array(26).fill(0);
  const windowFreq: number[] = new Array(26).fill(0);

  // Filling the array pFreq with letter frequencies in p
  for (let char of p) {
    const index = char.charCodeAt(0) - "a".charCodeAt(0);
    pFreq[index]++;
  }

  // We go along the line s
  for (let i = 0; i < s.length; i++) {
    // Increase the frequency of the current letter in the window
    const charIndex = s[i].charCodeAt(0) - "a".charCodeAt(0);
    windowFreq[charIndex]++;

    // If the window size is larger than p, decrease the frequency of the oldest letter in the window
    if (i >= p.length) {
      const charToRemoveIndex =
        s[i - p.length].charCodeAt(0) - "a".charCodeAt(0);
      windowFreq[charToRemoveIndex]--;
    }

    // Checking if the frequencies of the windowFreq and pFreq arrays are equal
    if (i >= p.length - 1 && arraysEqual(windowFreq, pFreq)) {
      result.push(i - p.length + 1);
    }
  }

  return result;
}

function arraysEqual(arr1: number[], arr2: number[]): boolean {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}
