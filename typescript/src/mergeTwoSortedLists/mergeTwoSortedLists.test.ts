import { mergeTwoLists, ListNode } from "./mergeTwoSortedLists";

describe("Merge Two Sorted Lists", () => {
  const createLinkedListFromArray = (arr: number[]): ListNode | null => {
    if (arr.length === 0) return null;
    const dummyHead = new ListNode(-1);
    let current = dummyHead;
    for (const val of arr) {
      current.next = new ListNode(val);
      current = current.next;
    }
    return dummyHead.next;
  };

  const convertLinkedListToArray = (head: ListNode | null): number[] => {
    const result: number[] = [];
    let current = head;
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
    return result;
  };

  it("should return null for empty lists", () => {
    expect(mergeTwoLists(null, null)).toBe(null);
  });

  it("should return the non-empty list when one list is empty", () => {
    const list1 = createLinkedListFromArray([]);
    const list2 = createLinkedListFromArray([1, 2, 3]);
    const mergedList = mergeTwoLists(list1, list2);
    expect(convertLinkedListToArray(mergedList)).toEqual([1, 2, 3]);

    const list3 = createLinkedListFromArray([1, 2, 3]);
    const list4 = createLinkedListFromArray([]);
    const mergedList2 = mergeTwoLists(list3, list4);
    expect(convertLinkedListToArray(mergedList2)).toEqual([1, 2, 3]);
  });

  it("should merge two sorted lists correctly", () => {
    const list5 = createLinkedListFromArray([1, 2, 4]);
    const list6 = createLinkedListFromArray([1, 3, 4]);
    const mergedList3 = mergeTwoLists(list5, list6);
    expect(convertLinkedListToArray(mergedList3)).toEqual([1, 1, 2, 3, 4, 4]);

    const list7 = createLinkedListFromArray([1, 3, 5]);
    const list8 = createLinkedListFromArray([2, 4, 6]);
    const mergedList4 = mergeTwoLists(list7, list8);
    expect(convertLinkedListToArray(mergedList4)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
