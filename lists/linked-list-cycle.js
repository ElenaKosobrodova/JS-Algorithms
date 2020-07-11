/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var hasCycle = function (head) {
  var pos = -1;
  var current = head;
  if (current === null) {
    return false;
  }
  var arr = [];

  while (pos < 0) {
    if (current.next === null) {
      return false;
    }
    arr.push(current);
    current = current.next;
    if (arr.includes(current)) {
      return true;
    }
  }
  return false;
};
