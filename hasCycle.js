var hasCycle = function(head, pos) {
    if (!head || !head.next) return false;
    let set = {};
    let idx = 0;

   while (head != null){
    
    if (set[head.val] === undefined) {
        set[head.val] = idx
    } else {
     if (set[pos] != undefined) return true;
    }
    idx++;
    head = head.next;
   }

   return false;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
    }

let node1 = new TreeNode(3)
let node2 = new TreeNode(2)
let node3 = new TreeNode(0)
let node4 = new TreeNode(-4)
node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2;

console.log(hasCycle(node1, 1))