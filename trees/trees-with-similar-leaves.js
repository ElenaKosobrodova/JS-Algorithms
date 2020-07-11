/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function (root1, root2) {
  var queue1 = [];
  var queue2 = [];
  var leaf1 = [];
  var leaf2 = [];

  function traversal(node, queue, leaf) {
    if (node !== null) {
      queue.push(node);
    }
    while (queue.length > 0) {
      node = queue.pop();

      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
      if (node.left === null && node.right === null) {
        leaf.push(node.val);
      }
    }
    return leaf;
  }
  traversal(root1, queue1, leaf1);
  traversal(root2, queue2, leaf2);

  console.log(leaf1);
  console.log(leaf2);
  if (leaf1.length !== leaf2.length) {
    return false;
  }
  for (let i = 0; i < leaf1.length; i++) {
    if (leaf1[i] !== leaf2[i]) {
      return false;
    }
  }
  return true;
};
