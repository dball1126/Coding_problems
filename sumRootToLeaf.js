var sumRootToLeaf = function (root) {
    let queue = [root];
    let results = [];
};

function Node(val){
    this.val = val;
    this.left = this.right = null;
}

let node1 = new Node(1);
node1.left = new Node(0);
node1.right = new Node(1);
node1.left.left = new Node(0);
node1.left.right = new Node(1);
node1.right.left = new Node(0);
node1.right.right = new Node(1);