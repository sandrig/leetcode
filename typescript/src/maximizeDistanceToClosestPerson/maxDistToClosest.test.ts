import { maxDistToClosest } from "./maxDistToClosest";

describe("Maximize Distance to Closest Person", () => {
  it("should return the maximum distance between people", () => {
    const seats = [1, 0, 0, 0, 1, 0, 1];
    const result = maxDistToClosest(seats);
    expect(result).toBe(2);
  });

  it("should handle the case where the first seat is empty", () => {
    const seats = [0, 0, 0, 1];
    const result = maxDistToClosest(seats);
    expect(result).toBe(3);
  });

  it("should handle the case where the last seat is empty", () => {
    const seats = [1, 0, 0, 0];
    const result = maxDistToClosest(seats);
    expect(result).toBe(3);
  });

  it("should handle the case where all seats are empty", () => {
    const seats = [0, 0, 0, 0, 0];
    const result = maxDistToClosest(seats);
    expect(result).toBe(5);
  });
});
