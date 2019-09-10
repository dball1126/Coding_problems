function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

// var hasPathSum = function (root, sum) {
//     if (!root) return 0;
//     let node = root;
//     let summation = sum;
//     // let mainSum = 0;
//     // let mainSum2 = 0;
//     // mainSum += hasPathSum(root.left) + root.val
//     // mainSum2 += hasPathSum(root.right) + root.val
//     let pathExisit = function (node, sum) {
//         if (!node) return 0;
//         let newMainL = 0;
//         let newMainR = 0;
       
//           let left = newMainL += pathExisit(node.left, sum) + node.val
//           let right = newMainR += pathExisit(node.right, sum) + node.val
           
//             // console.log(newMainL)
//             // console.log(newMainR)   
//         // return left
//         // if (newMainL === sum || newMainR === sum) {
//         //     return true
//         // } else {
//         //     return false
//         // }
//     }
    
//     return pathExisit(root, sum)  
// };


// var hasPathSum = function (root, sum) {
//     let res = false;
//     function helper(node, cur) {
//         if (!node) return;
//         cur += node.val;
//         if (!node.left && !node.right) {
//             if (cur === sum) {
//                 res = true;
//                 return;
//             }
//         }
//         else {
//             helper(node.left, cur);
//             helper(node.right, cur);
//         }
//     }
//     helper(root, 0);
//     return res;
// };




var hasPathSum = function(root, sum) {
    let result = false;

    function helper(root, sum) {
        if (!root) return;
        sum -= root.val;

        if (sum === 0 && !root.left && !root.right){
            result = true;
            return;
        }

        helper(root.left, sum)
        helper(root.right, sum)
    }

    helper(root, sum);
    return result;
}








let node = new TreeNode(5);
node.left = new TreeNode(4);
node.right = new TreeNode(8);
node.left.left = new TreeNode(11);
node.left.left.left = new TreeNode(7);
node.left.left.right = new TreeNode(2);
node.right.left = new TreeNode(13);
node.right.right = new TreeNode(4);
node.right.right.right = new TreeNode(1);

console.log(hasPathSum(node, 26))