/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var longestUnivaluePath = function (root) {
  if (!root || (root.left === null && root.right === null)) {
    return 0;
  }
  var sum = maxPath(root.left, root.val) + maxPath(root.right, root.val);
  return Math.max(
    sum,
    longestUnivaluePath(root.left),
    longestUnivaluePath(root.right)
  );
};

//helper
function maxPath(root, value) {
  if (!root || root.val !== value) {
    return 0;
  }
  var left = maxPath(root.left, value);
  var right = maxPath(root.right, value);
  return 1 + Math.max(left, right);
}
