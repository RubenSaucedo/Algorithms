import { ListNode } from './linked-list-node.js';

export function LinkedList () {
  this.head = null;
  this.tail = null;
}

LinkedList.prototype.add = function (value) {
  if (this.head === null) {
    this.head = new ListNode(value);
    this.tail = this.head;

    return this.head;
  }

  this.tail.next = new ListNode(value);
  this.tail = this.tail.next;
  return this.head;
};

LinkedList.prototype.print = function () {
  let current = this.head;
  let result = '';

  while (current) {
    result += `${current.val} -> `;
    current = current.next;
  }

  console.log(result + 'null');
};

// const linkedList = new LinkedList();
// linkedList.add(1);
// linkedList.add(2);
// linkedList.add(3);

// linkedList.print();

