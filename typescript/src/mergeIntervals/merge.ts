export function merge(intervals: number[][]): number[][] {
  if (intervals.length <= 1) {
    return intervals;
  }

  // Sort intervals by starting point
  intervals.sort((a, b) => a[0] - b[0]);

  const mergedIntervals: number[][] = [intervals[0]];

  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const previousInterval = mergedIntervals[mergedIntervals.length - 1];

    // If the current interval overlaps with the previous one, merge them
    if (currentInterval[0] <= previousInterval[1]) {
      previousInterval[1] = Math.max(previousInterval[1], currentInterval[1]);
    } else {
      // Otherwise, add the current interval to the list of combined
      mergedIntervals.push(currentInterval);
    }
  }

  return mergedIntervals;
}
