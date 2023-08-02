import { topKFrequent } from "./topKFrequent";

describe("Top K Frequent Words", () => {
  it("Should return the top k frequent words", () => {
    const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
    const k = 2;
    const result = topKFrequent(words, k);
    expect(result).toEqual(["apple", "banana"]);
  });

  it("Should handle an empty array", () => {
    const words: string[] = [];
    const k = 3;
    const result = topKFrequent(words, k);
    expect(result).toEqual([]);
  });

  it("Should return the entire array if k is larger than the number of unique words", () => {
    const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
    const k = 5;
    const result = topKFrequent(words, k);
    expect(result).toEqual(["apple", "banana", "orange"]);
  });

  it("Should handle words with the same frequency", () => {
    const words = ["apple", "banana", "apple", "banana", "orange", "orange"];
    const k = 2;
    const result = topKFrequent(words, k);
    expect(result).toEqual(["apple", "banana"]);
  });
});
