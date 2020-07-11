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

  remove(index) {
    var count = 0;
    var current = this.head;
    if (index > this.length) {
      return undefined;
    }
    while (count !== index) {
      count++;
      current = current.next;
    }
    if (index > 0 && index < this.length - 1) {
      var prevNode = current.prev;
      var removed = prevNode.next;
      prevNode.next = removed.next;
    }
    if (index === 0) {
      this.head = current.next;
      this.head.prev = null;
      current.next = null;
    }
    if (index === this.length - 1) {
      this.tail = current.prev;
      current.prev = null;
    }
    this.length--;
    return current;
  }
}
