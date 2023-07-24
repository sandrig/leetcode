import { RandomizedSet } from "./randomizedSet";

describe("RandomizedSet", () => {
  let randomizedSet: RandomizedSet;

  beforeEach(() => {
    randomizedSet = new RandomizedSet();
  });

  it("should insert a new element and return true", () => {
    expect(randomizedSet.insert(1)).toBe(true);
    expect(randomizedSet.insert(2)).toBe(true);
    expect(randomizedSet.insert(3)).toBe(true);
  });

  it("should not insert a duplicate element and return false", () => {
    randomizedSet.insert(1);
    expect(randomizedSet.insert(1)).toBe(false);
  });

  it("should remove an existing element and return true", () => {
    randomizedSet.insert(1);
    randomizedSet.insert(2);
    expect(randomizedSet.remove(1)).toBe(true);
  });

  it("should not remove a non-existing element and return false", () => {
    expect(randomizedSet.remove(1)).toBe(false);
  });

  it("should return a random element from the set", () => {
    randomizedSet.insert(1);
    randomizedSet.insert(2);
    randomizedSet.insert(3);
    const randomElement = randomizedSet.getRandom();
    expect([1, 2, 3]).toContain(randomElement);
  });

  it("should return undefined when trying to get a random element from an empty set", () => {
    expect(randomizedSet.getRandom()).toBe(undefined);
  });
});
