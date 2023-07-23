// List node definition
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // Create a new linked list that will contain the merged nodes
  const dummyHead = new ListNode(-1);
  let current = dummyHead;

  // We continue to merge nodes until there is at least one node in each list
  while (list1 !== null && list2 !== null) {
    if (list1.val <= list2.val) {
      current.next = list1;
      list1 = list1.next;
    } else {
      current.next = list2;
      list2 = list2.next;
    }
    current = current.next;
  }

  // If there are nodes in the first list, add them to the end of the new list
  if (list1 !== null) {
    current.next = list1;
  }

  // If there are nodes in the second list, add them to the end of the new list
  if (list2 !== null) {
    current.next = list2;
  }

  return dummyHead.next;
}
