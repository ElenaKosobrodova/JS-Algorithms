/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
  var length = 0;
  var count = 0;
  var front = head;
  var current = head;
  while (front.next !== null) {
    length++;
    front = front.next;
  }
  length++;

  if (length < 0 || n > length) {
    return undefined;
  }
  if (length === 1 && n === 1) {
    return null;
  }
  if (length - n === 0) {
    head = head.next;
  }

  while (count < length - n - 1) {
    count++;
    current = current.next;
  }

  var prevNode = current;
  var removed = prevNode.next;
  prevNode.next = removed.next;
  return head;
};
