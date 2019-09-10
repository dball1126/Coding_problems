class TreeNode{
    constructor(val){
        this.next = null;
        this.prev = null;
        this.child = null;
        this.value = val;
    }
}

class DoubleLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

}




let node1 = new TreeNode(5);
let node2 = new TreeNode(33);
let node3 = new TreeNode(17);
let node4 = new TreeNode(2);
let node5 = new TreeNode(1);
let node6 = new TreeNode(6);
let node7 = new TreeNode(25);
let node8 = new TreeNode(6);
let node9 = new TreeNode(2);
let node10 = new TreeNode(7);
let node11 = new TreeNode(8);
let node12 = new TreeNode(9);
let node13 = new TreeNode(12);
let node14 = new TreeNode(5);
let node15 = new TreeNode(7);
let node16 = new TreeNode(21);
let node17 = new TreeNode(3);

node1.next = node2;
node1.child = node6;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;
node3.next = node4;
node4.prev = node3;
node4.next = node5;
node4.child = node9;
node5.prev = node4;
//
node6.next = node7;
node7.prev = node6;
node7.next = node8;
node7.child = node11;
node8.prev = node7;
node8.child = node12;
node9.next = node10;
node9.child = node13;
node10.prev = node9;
//
node12.child = node15;
node13.next = node14;
node13.child = node16;
node14.prev = node13;
//
node16.next = node17;
node17.prev = node16;
//
let list = new DoubleLinkedList();
list.head = node1;
list.tail = node5;

// const LinkFlatten = (list) => {
//     let head = list.head;
//     let tail = list.tail;
//     let queue = [ head];
//     let ordering = [ node1 ];

//     while (queue.length > 0) {
//         let current = queue.shift();
//         while (current) {
//             if (current.child) {
//                 queue.push(current.child);
//                 ordering.push(current.child);
//             }
//             if (current.next === null && queue.length > 0) {
//                 let temp = current;
//                 current = current.next;
//                 temp.next = queue[0];
//                 queue[0].prev = temp;
//             } else {
//                 current = current.next;
//             }
//         }
//     }

//     return head;
// }

const append = (node, tail) =>{
    let current = node;
    tail.next = node;
    node.prev = tail;


    while(current.next !== null) {
        current = current.next;
    }
        tail = current;
    return tail;
}


const LinkFlatten = (head, tail) => {
    
    let current = head;
    while (current){
        if (current.child) {
           tail = append(current.child, tail)
        }
        current = current.next;
    }
    return head;
    // print_list(head);
}   

// function print_list(node) {
//     let current = node;
//     while(current) {
//         console.log(current.value);
//         current = current.next;
//     }
// }
// We did not return from the append function, which was creating a big issue.
nodes = LinkFlatten(list.head, list.tail)
console.log(nodes)
// LinkFlatten(list.head, list.tail)
// console.log(noee)
// console.log(LinkFlatten(list))
// console.log(list)
// console.log(node2.prev.child)



