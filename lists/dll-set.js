class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  set(index, val) {
    var count = 0;
    var current = this.head;
    if (index > this.length) {
      return false;
    } else {
      while (count !== index) {
        count++;
        current = current.next;
      }
      current.val = val;
      return true;
    }
  }
}
