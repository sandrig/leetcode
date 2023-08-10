import { numIslands } from "./numIslands";

describe("Number of Islands", () => {
  it("should return the correct number of islands", () => {
    const grid1 = [
      ["1", "1", "0", "0", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "1", "0", "0"],
      ["0", "0", "0", "1", "1"],
    ];
    expect(numIslands(grid1)).toBe(3);

    const grid2 = [
      ["1", "1", "1", "1", "0"],
      ["1", "1", "0", "1", "0"],
      ["1", "1", "0", "0", "0"],
      ["0", "0", "0", "0", "0"],
    ];
    expect(numIslands(grid2)).toBe(1);
  });

  it("should return 0 for an empty grid", () => {
    const emptyGrid: string[][] = [];
    expect(numIslands(emptyGrid)).toBe(0);
  });

  it("should return 0 when there are no islands", () => {
    const noIslandsGrid = [
      ["0", "0", "0"],
      ["0", "0", "0"],
      ["0", "0", "0"],
    ];
    expect(numIslands(noIslandsGrid)).toBe(0);
  });
});
