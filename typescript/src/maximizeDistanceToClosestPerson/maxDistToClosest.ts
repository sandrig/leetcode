export function maxDistToClosest(seats: number[]): number {
  let maxDistance = 0;
  let lastPersonIndex = -1;

  for (let i = 0; i < seats.length; i++) {
    if (seats[i] === 1) {
      if (lastPersonIndex === -1) {
        // For the distance to the first seated person
        maxDistance = Math.max(maxDistance, i);
      } else {
        maxDistance = Math.max(
          maxDistance,
          Math.floor((i - lastPersonIndex) / 2)
        );
      }
      lastPersonIndex = i;
    }
  }

  // For the distance to the last seated person
  maxDistance = Math.max(maxDistance, seats.length - 1 - lastPersonIndex);

  return maxDistance;
}
