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
  l1: ListNode | null,
  l2: ListNode | null
): ListNode | null {
  // Create a new linked list that will contain the merged nodes
  const dummyHead = new ListNode(-1);
  let current = dummyHead;

  // We continue to merge nodes until there is at least one node in each list
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // If there are nodes in the first list, add them to the end of the new list
  if (l1 !== null) {
    current.next = l1;
  }

  // If there are nodes in the second list, add them to the end of the new list
  if (l2 !== null) {
    current.next = l2;
  }

  return dummyHead.next;
}
