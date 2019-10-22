

class Node{
    constructor(val) {
        this.next = null;
        this.val = val;
    }
}

class SinglyLinkedList {
    constructor(node){
        this.head = null;
        this.tail = null;
    }

}

let ele = new Node(1);
ele.next = new Node(2);
ele.next.next = new Node(3);
ele.next.next.next = new Node(4);
ele.next.next.next.next = new Node(5);
// ele.next.next.next.next.next = new Node(6);


let list = new SinglyLinkedList;
list.head = ele;
list.tail = ele.next.next.next.next;

const mideNode = function(node){
    let count = 1;
    let head = node;
    while(node.next !== null) {
        count++;
        node = node.next;
    }
    let mid = 0; 
    if (count % 2 === 0) {
        mid = Math.ceil(count / 2);
    } else {
        mid = Math.floor(count / 2);
    }

    for (let i = 0; i < mid+1; i++) {
       
        if (i === mid){ 
           
            return head;
        }
        head = head.next;
    }
}
console.log(mideNode(ele))