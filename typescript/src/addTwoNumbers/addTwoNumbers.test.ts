import { ListNode, addTwoNumbers } from "./addTwoNumbers";

describe("Add Two Numbers", () => {
  it("should return null for two empty lists", () => {
    expect(addTwoNumbers(null, null)).toBe(null);
  });

  it("should return the non-empty list when the other list is empty", () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    expect(addTwoNumbers(l1, null)).toStrictEqual(l1);
  });

  it("should add two single-digit numbers correctly", () => {
    const l1 = new ListNode(2);
    const l2 = new ListNode(3);
    const expectedResult = new ListNode(5);
    expect(addTwoNumbers(l1, l2)).toEqual(expectedResult);
  });

  it("should handle carrying correctly", () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(9)));
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
    const expectedResult = new ListNode(
      7,
      new ListNode(0, new ListNode(4, new ListNode(1)))
    );
    expect(addTwoNumbers(l1, l2)).toEqual(expectedResult);
  });

  it("should handle cases with different list lengths", () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
    const l2 = new ListNode(
      5,
      new ListNode(6, new ListNode(4, new ListNode(1)))
    );
    const expectedResult = new ListNode(
      7,
      new ListNode(0, new ListNode(8, new ListNode(1)))
    );
    expect(addTwoNumbers(l1, l2)).toEqual(expectedResult);
  });

  it("should handle cases with leading zeros", () => {
    const l1 = new ListNode(0);
    const l2 = new ListNode(0, new ListNode(1));
    const expectedResult = new ListNode(0, new ListNode(1));
    expect(addTwoNumbers(l1, l2)).toEqual(expectedResult);
  });
});
