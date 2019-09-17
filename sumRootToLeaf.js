// var sumRootToLeaf = function (root, s, p) {
//     if(!root) return ""
//     let results = [];
//     let sum = root.val;
//     let parentSum = 0;
  
//     if (!root.left && !root.right){
//         parentSum += parseInt(sum, 2)
//     }
//     parentSum += sumRootToLeaf(root.left, sum, parentSum) + sumRootToLeaf(root.right, sum, parentSum)
//     return sum
// };
var sumRootToLeaf = function (root, result = 0) {
    if (root) root.val = root.val.toString();
    else return result;

    if (!root.left && !root.right) {
        result += parseInt(root.val, 2);
        return result
    }

    if (root.left) root.left.val = root.val + root.left.val;
    if (root.right) root.right.val = root.val + root.right.val;

    return sumRootToLeaf(root.left, result) + sumRootToLeaf(root.right, result);
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

console.log(sumRootToLeaf(node1))