export function topKFrequent(words: string[], k: number): string[] {
  // Create a hash table to count the frequency of words
  const wordFrequencyMap: Map<string, number> = new Map();

  // Populate the hash table
  for (const word of words) {
    const count = wordFrequencyMap.get(word) || 0;
    wordFrequencyMap.set(word, count + 1);
  }

  // Create an array of [word, frequency] pairs from a hash table
  const wordFrequencyArray: [string, number][] = Array.from(wordFrequencyMap);

  // Sort the array in descending frequency
  wordFrequencyArray.sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    } else {
      // If frequencies are equal, sort alphabetically
      return a[0].localeCompare(b[0]);
    }
  });

  // Choose k most frequently occurring words
  const result: string[] = wordFrequencyArray
    .slice(0, k)
    .map((pair) => pair[0]);

  return result;
}
