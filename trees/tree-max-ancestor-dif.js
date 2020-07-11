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
var maxAncestorDiff = function (root) {
  function difference(root, minDif, maxDif) {
    if (root === null) {
      return Math.abs(maxDif - minDif);
    }
    var maxDif = Math.max(maxDif, root.val);
    var minDif = Math.min(minDif, root.val);
    return Math.max(
      difference(root.left, minDif, maxDif),
      difference(root.right, minDif, maxDif)
    );
  }
  return difference(root, root.val, root.val);
};
