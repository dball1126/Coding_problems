class Node {
    constructor(val){
        this.val = val;
        this.next = null;
        this.prev = null;
        this.child = null;
    }
}

var flatten = function(head) {
    if (!head) return;
  let stack = [ head ];
  const master = head;
  let nodeHead = null;

  while (stack.length) {
      let node = stack.pop();

      if (!nodeHead) {
          nodeHead = node;
      } else {
          nodeHead.next = node;
          node.prev = nodeHead;
          nodeHead = node;
      }

      if (node.next) stack.push(node.next)
      if (node.child) stack.push(node.child)
      node.child = null;
  }

  return master;
};

node1 = new Node(1);
node2 = new Node(2);
node3 = new Node(3);
node4 = new Node(4);
node5 = new Node(5);
node6 = new Node(6);
node7 = new Node(7);
node8 = new Node(8);
node9 = new Node(9);


node1.next = node2;
node2.next = node3;
node2.prev = node1;
node3.next = node4;
node3.prev = node2;

node3.child = node5;

node5.next = node6;
node6.next = node7;
node6.prev = node5;

node7.child = node8;

node8.next = node9;
node9.prev = node7;

console.log(flatten(node1));