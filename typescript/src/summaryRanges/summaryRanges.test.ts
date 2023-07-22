import { summaryRanges } from "./summaryRanges";

describe("Summary Ranges", () => {
  it("Should return the correct ranges for a sorted array", () => {
    expect(summaryRanges([0, 1, 2, 4, 5, 7])).toEqual(["0->2", "4->5", "7"]);
    expect(summaryRanges([0, 2, 3, 4, 6, 8, 9])).toEqual([
      "0",
      "2->4",
      "6",
      "8->9",
    ]);
    expect(summaryRanges([-1, 0, 1, 2, 4, 5, 7])).toEqual([
      "-1->2",
      "4->5",
      "7",
    ]);
  });

  it("Should handle an empty input array", () => {
    expect(summaryRanges([])).toEqual([]);
  });

  it("Should handle an array with a single element", () => {
    expect(summaryRanges([42])).toEqual(["42"]);
  });

  it("Should handle negative numbers", () => {
    expect(summaryRanges([-5, -4, -3, -1])).toEqual(["-5->-3", "-1"]);
  });
});
