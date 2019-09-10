function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
  }

// var inorderTraversal = function (root) {
//     if (!root) return [];
//     let result = [];
    
//     let stack = [root];
  
//         // stack = [root, root.left, root.left, root.left]        [ 1 2 3   4  9   8 7 6 ]
//     while (stack.length) {
        
//         if (root.left) {
//             stack.push(root.left)
//             root = root.left;
            
//             continue;
//         } else {

//         let node = stack.pop();
//         result.push(node.val);
        
//         if (node.left) stack.push(node.left)        
//         if (node.right) stack.push(node.right)
//         }
//     }
//     return result

// };
// var inorderTraversal = function (root) {
//     const arr = [];
//     const stack = [];
//     let node = root;

//     while (node || stack.length) {
//         while (node) {
//             stack.push(node);
//             node = node.left;
//         }

//         node = stack.pop();
//         arr.push(node.val);
//         node = node.right;
//     }

//     return arr;
// };

// var postorderTraversal = function (root) {
//     const arr = [];
//     const stack = [];
//     let node = root;

//     while (node || stack.length) {
//         while (node) {
//             node.right && stack.push(node.right);
//             stack.push(node);
//             node = node.left;
//         }

//         node = stack.pop();

//         // Go right only if we haven't already.
//         if (node.right && stack[stack.length - 1] == node.right) {
//             stack.pop();
//             stack.push(node);
//             node = node.right;
//         } else {
//             arr.push(node.val);
//             node = null;
//         }
//     }

//     return arr;
// };


// var levelOrder = function (root) {
//     if (!root) return null;
//     let queue = [root];
//     let result = [];
//     //  [ 3, 9 , 20]
//     while (queue.length) {
//        let size = queue.length;
//        let current = [];

//        for (let i = 0; i < size; i++) {
//            let node = queue.shift();
//            current.push(node.val);
//            if (node.left !== null) queue.push(node.left)
//            if (node.right !== null) queue.push(node.right)
//        }

//        result.push(current)
//     }
//     return result;
// };

var isSymmetric = function (root) {
    let node = root;
    let left = node.left;
    let right = node.right;
    while (node) {
        if (left.val === right.val) {
            left = left.left;
            right = left.right;
            
    }

    return true;


    // if(!root) return [];
    // return isSymmetric(node.left.val) === isSymmetric(node.right.val);
};


let node = new TreeNode(1);
node.left = new TreeNode(2);
node.right = new TreeNode(2);
node.left.right = new TreeNode(4);
node.left.left = new TreeNode(3);
node.right.left = new TreeNode(4);
node.right.right = new TreeNode(3);
// let node = new TreeNode(1)
// node.left = new TreeNode(2);
// node.right = new TreeNode(3);
// node.left.left = new TreeNode(4);
// node.left.right = new TreeNode(5);

// let node = new TreeNode(1)
// // node.left = null;
// node.right = new TreeNode(2);
// node.right.left = new TreeNode(3);
                                            // [ root, root.left , root.left ]
// node.left.left = new TreeNode(4);
// node.left.right = new TreeNode(5);
// node.right.right.right = new TreeNode(4);

// console.log(node)

console.log(isSymmetric(node));