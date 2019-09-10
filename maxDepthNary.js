function Node(val, children) {
  this.val = val;
  this.children = [];
  };

var maxDepth = function (root) {
   let maxSum = 0;
   let queue = [ root ];

   while (queue.length) {
       let size = queue.length;

       for (let i = 0; i < size; i++) {
           let node = queue.shift();
           queue.push(...node.children)
       }
       maxSum++
   }
   return maxSum
};




let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);

node1.children = [node3, node2, node4];
node4.children = [node5, node6]


console.log(maxDepth(node1))