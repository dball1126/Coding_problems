function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
  }

// var isBalanced = function (root) {
//     return getHeight(root) !== -1;

//     function getHeight(root) {
//         if (!root) {
//             return 0;
//         }
//         debugger
//         let left = getHeight(root.left);
//         let right = getHeight(root.right);
//         if (left == -1 || right == -1 || Math.abs(left - right) > 1) {
//             return -1;
//         }
//         return 1 + Math.max(left, right);
//     }

// };
// function getHeight(root) {
//     if (!root) return -1;
//     let leftCount = getHeight(root.left)+1;
//     let rightCount = getHeight(root.right)+1;
// //    console.log(leftCount)
    
//     return 1 + Math.min(getHeight(root.left), getHeight(root.right));
//     return rightCount;
// }

var isBalanced = function (root) {
    if (!root) return null;
    let left = getHeight(root.left);
    let right = getHeight(root.right); 
    let max = Math.max(left, right)
    let min = Math.min(left, right)
    let difference = max - min <= 1 
    return difference && isBalanced(root.left) && isBalanced(root.right)
};
function getHeight(root) {
    if (!root) {
        return -1;
    }
    let left = Math.abs(getHeight(root.left) + 1);
    let right = Math.abs(getHeight(root.right) + 1);
    
    return Math.max(left, right)
    
}
//[1,2,2,3,null,null,3,4,null,null,4]
node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(2);
node.left.left = new TreeNode(3);
node.left.right = new TreeNode(3);
node.left.left.left = new TreeNode(4);
node.left.left.right = new TreeNode(4);

console.log(isBalanced(node));


// stock_prices = [10, 7, 5, 8, 11, 9]

// let get_max_profit = (stock_prices) => {
//   let min = Math.min(...stock_prices)
//   let max = Math.max(...stock_prices)
//   return max - min;
// }

// console.log(get_max_profit(stock_prices))