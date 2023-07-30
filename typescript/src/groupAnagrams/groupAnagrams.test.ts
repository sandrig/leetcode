import { groupAnagrams } from "./groupAnagrams";

describe("Group Anagrams", () => {
  it("should group anagrams correctly", () => {
    const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const output = groupAnagrams(input);

    const expectedOutput = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];

    expect(output).toEqual(expect.arrayContaining(expectedOutput));
  });

  it("should handle empty input", () => {
    const input: string[] = [];
    const output = groupAnagrams(input);

    const expectedOutput: string[][] = [];

    expect(output).toEqual(expectedOutput);
  });

  it("should handle single word input", () => {
    const input = ["hello"];
    const output = groupAnagrams(input);

    const expectedOutput = [["hello"]];

    expect(output).toEqual(expectedOutput);
  });

  it("should handle input with no anagrams", () => {
    const input = ["cat", "dog", "fish"];
    const output = groupAnagrams(input);

    const expectedOutput = [["cat"], ["dog"], ["fish"]];

    expect(output).toEqual(expectedOutput);
  });
});
