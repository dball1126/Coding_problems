function Node(val, children = []) {
  this.val = val;
  this.children = children;
  };

// var preorder = function (root, nodes = []) {

//    console.log(root);
//     nodes.push(root.val);
//     root.children.forEach(element => {

//         preorder(element, nodes);
//     });

//     return nodes;
// };

var preorder = function (root){
    let stack = [root];
    let result = [];

    while (stack.length) {
        let node = stack.pop();
        result.push(node.val);
        for (let i = node.children.length-1; i >= 0; i--) {
            stack.push(node.children[i])
        }
    }
    return result;
}

node1 = new Node(1);
node2 = new Node(2);
node3 = new Node(3);
node4 = new Node(4);
node5 = new Node(5);
node6 = new Node(6);
node7 = new Node(7);
node8 = new Node(8);
node9 = new Node(9);


node1.children = [node2, node3, node4];
node2.children = [node5, node6];
node4.children = [node7, node8, node9]

// node1.children = [node3, node2, node4];
// node3.children = [node5, node6];

// console.log(node1);
// console.log(node3);


console.log(preorder(node1));