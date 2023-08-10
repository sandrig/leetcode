export function numIslands(grid: string[][]): number {
  if (!grid || grid.length === 0) {
    return 0;
  }

  const numRows = grid.length;
  const numCols = grid[0].length;
  let count = 0;

  const directions = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  function bfs(row: number, col: number) {
    const queue: [number, number][] = [[row, col]];
    // Mark the current cell as visited
    grid[row][col] = "0";

    while (queue.length > 0) {
      const [currentRow, currentCol] = queue.shift()!;

      for (const [dr, dc] of directions) {
        const newRow = currentRow + dr;
        const newCol = currentCol + dc;

        if (
          newRow >= 0 &&
          newRow < numRows &&
          newCol >= 0 &&
          newCol < numCols &&
          grid[newRow][newCol] === "1"
        ) {
          queue.push([newRow, newCol]);
          // Mark the adjacent cell as visited
          grid[newRow][newCol] = "0";
        }
      }
    }
  }

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (grid[row][col] === "1") {
        count++;
        bfs(row, col);
      }
    }
  }

  return count;
}
