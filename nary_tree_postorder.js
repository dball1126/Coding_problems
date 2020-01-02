function Node(val, children = []) {
    this.val = val;
    this.children = children;
};

var postorder = function(root, order = []) {
    if (!root) return [];
    if (root.children.length === 0) return [root.val];

   for (let i = 0; i < root.children.length; i++) {
        const child = root.children[i];
        order = order.concat(postorder(child))
   }
   order.push(root.val)

   return order;
};

node1 = new Node(1);
node2 = new Node(3);
node3 = new Node(2);
node4 = new Node(4);
node5 = new Node(5);
node6 = new Node(6);
node7 = new Node(7);
node8 = new Node(8);
node9 = new Node(9);


node1.children = [node2, node3, node4];
node2.children = [node5, node6];


console.log(postorder(node1))