
function lowestCommonAncestor(root, val1, val2) {
    
    while(root !== null) {
        let val = root.val;

        if (val > val1 && val > val2) {
            root = root.left
        } else if (val < val1 && val < val2) {
            root = root.right;
        } else {
            return root.val;
        }
    }
}









class TreeNode {
    constructor(val){
        this.val = val;
        this.left = this.right = null;
    }
}

node1 = new TreeNode(20)
node2 = new TreeNode(8)
node3 = new TreeNode(22)
node4 = new TreeNode(4)
node5 = new TreeNode(12)
node6 = new TreeNode(10)
node7 = new TreeNode(14)

node1.left = node2;
node1.right = node3;
node2.left = node4;
node2.right = node5;
node5.left = node6;
node5.right = node7;

// console.log(node1)

console.log(lowestCommonAncestor(node1, 4, 10))