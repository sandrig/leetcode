import { compress } from "./stringCompression";

describe("String Compression", () => {
  it("should compress the string with repeated characters", () => {
    const chars: string[] = ["a", "a", "b", "b", "c", "c", "c"];
    const compressedLength = compress(chars);
    expect(compressedLength).toBe(6);
    expect(chars.slice(0, compressedLength)).toEqual([
      "a",
      "2",
      "b",
      "2",
      "c",
      "3",
    ]);
  });

  it("should return the original string if it cannot be compressed", () => {
    const chars: string[] = ["a"];
    const compressedLength = compress(chars);
    expect(compressedLength).toBe(1);
    expect(chars.slice(0, compressedLength)).toEqual(["a"]);
  });

  it("should handle multiple repeating characters", () => {
    const chars: string[] = [
      "a",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
      "b",
    ];
    const compressedLength = compress(chars);
    expect(compressedLength).toBe(4);
    expect(chars.slice(0, compressedLength)).toEqual(["a", "b", "1", "2"]);
  });

  it("should handle alternating characters", () => {
    const chars: string[] = ["a", "a", "a", "b", "b", "a", "a"];
    const compressedLength = compress(chars);
    expect(compressedLength).toBe(6);
    expect(chars.slice(0, compressedLength)).toEqual([
      "a",
      "3",
      "b",
      "2",
      "a",
      "2",
    ]);
  });

  it("should handle an empty string", () => {
    const chars: string[] = [];
    const compressedLength = compress(chars);
    expect(compressedLength).toBe(0);
    expect(chars.slice(0, compressedLength)).toEqual([]);
  });
});
