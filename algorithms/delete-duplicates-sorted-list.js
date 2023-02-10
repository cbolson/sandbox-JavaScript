function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var deleteDuplicates = function (head) {
  if (!head) return null;

  let currNode = head;

  while (currNode?.next) {
    let nextNode = currNode.next;
    //console.log(nextNode);
    while (nextNode && nextNode.val === currNode.val) {
      nextNode = nextNode.next;
    }

    currNode.next = nextNode;
    currNode = nextNode;
  }

  return head;
};

console.log(deleteDuplicates([1, 2, 1]));
