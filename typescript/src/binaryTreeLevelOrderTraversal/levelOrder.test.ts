import { levelOrder, TreeNode } from "./levelOrder";

describe("Binary Tree Level Order Traversal", () => {
  it("should return an empty array for an empty tree", () => {
    const root = null;
    expect(levelOrder(root)).toEqual([]);
  });

  it("should correctly traverse a balanced tree", () => {
    // Create the following balanced tree:
    //     3
    //    / \
    //   9  20
    //      / \
    //     15  7
    const root = new TreeNode(3);
    root.left = new TreeNode(9);
    root.right = new TreeNode(20);
    root.right.left = new TreeNode(15);
    root.right.right = new TreeNode(7);

    const expected = [[3], [9, 20], [15, 7]];
    expect(levelOrder(root)).toEqual(expected);
  });

  it("should correctly traverse an unbalanced tree", () => {
    // Create the following unbalanced tree:
    //     1
    //      \
    //       2
    //        \
    //         3
    const root = new TreeNode(1);
    root.right = new TreeNode(2);
    root.right.right = new TreeNode(3);

    const expected = [[1], [2], [3]];
    expect(levelOrder(root)).toEqual(expected);
  });
});
