var inorderSuccessor = function(root, p) {
    let successor = Infinity;
    let queue = [root];
    while (queue.length) {
        let node = queue.shift();
        
        if (node.val > p) successor = Math.min(successor, node.val);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return successor === Infinity ? null : successor
};

class Node{
    constructor(val) {
        this.left = this.right = null;
        this.val = val;
    }
}

let node1 = new Node(2);
let node2 = new Node(1);
let node3 = new Node(3);

console.log(inorderSuccessor(node1, 1))