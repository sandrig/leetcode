import { ListNode, reverseList } from "./reverseList";

describe("Reverse Linked List", () => {
  it("should reverse a linked list with multiple nodes", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = new ListNode(4);
    head.next.next.next.next = new ListNode(5);

    const reversedHead = reverseList(head);

    let current: ListNode | null = reversedHead;
    expect(current?.val).toBe(5);
    current = current!.next;
    expect(current?.val).toBe(4);
    current = current!.next;
    expect(current?.val).toBe(3);
    current = current!.next;
    expect(current?.val).toBe(2);
    current = current!.next;
    expect(current?.val).toBe(1);
    expect(current?.next).toBe(null);
  });

  it("should reverse a linked list with a single node", () => {
    const head = new ListNode(1);

    const reversedHead = reverseList(head);

    expect(reversedHead?.val).toBe(1);
    expect(reversedHead?.next).toBe(null);
  });

  it("should return null for an empty linked list", () => {
    const head = null;

    const reversedHead = reverseList(head);

    expect(reversedHead).toBe(null);
  });
});
