function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
  }

var isBalanced = function (root) {
  if (!root) return true;
  if (!root.left && !root.right) return true;
  let left = getHeight(root.left);
  let right = getHeight(root.right);
  let min = Math.min(left, right);
  let max = Math.max(left, right);

  return (max - min) <= 1 && isBalanced(root.left) && isBalanced(root.right)
};
function getHeight(root) {
    if (!root) return -1;
    return Math.max((getHeight(root.left) + 1), getHeight(root.right) + 1)
}
//[1,2,2,3,null,null,3,4,null,null,4]
node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(2);
// node.left.left = new TreeNode(3);
// node.left.right = new TreeNode(3);
// node.left.left.left = new TreeNode(4);
// node.left.left.right = new TreeNode(4);

console.log(isBalanced(node));


// stock_prices = [10, 7, 5, 8, 11, 9]

// let get_max_profit = (stock_prices) => {
//   let min = Math.min(...stock_prices)
//   let max = Math.max(...stock_prices)
//   return max - min;
// }

// console.log(get_max_profit(stock_prices))