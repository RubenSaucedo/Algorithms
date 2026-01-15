export function ListNode(val, next) {
    this.val = val===undefined ? 0 : val;
    this.next = next===undefined ? null : next;
}

ListNode.prototype.print = function() {
  let current = this;
  let values = [];
  while (current) {
    values.push(current.val);
    current = current.next;
  }
  console.log(values.join(" -> "));
}