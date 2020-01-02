function Node(val, children = []) {
    this.val = val;
    this.children = children;
};

var levelOrder = function(root) {

    let queue = [root];
    let level = [];
    let children = [];
    let order = [];
    
    while (queue.length){
        let node = queue.shift();
        level.push(node.val);

        for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            children.push(child)
       }

       if (queue.length === 0) {
        order.push(level)
        level = []

        if (children.length > 0) {
        queue.push(...children)
        children = []
        }

        }
    }

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


console.log(levelOrder(node1))

