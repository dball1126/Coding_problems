class Node {
    constructor(val = null){
        this.left = this.right = null;
        this.val = val;
    }
}

function heapify(root){
    let node = root;
    let size = traverse(node, 0, null);
    let nodeArr = new Array(size);
    traverse(node, 0, nodeArr)

    let flag = false;
    while (flag === false) {
        flag = true;

        let i = 0;
        let j = 1;
        while (j < nodeArr.length){
            if (nodeArr[i].val < nodeArr[j].val) {
                flag = false;
                [nodeArr[i], nodeArr[j]] = [nodeArr[j], nodeArr[i]]
            }
            j++;
            i++;
        }
    }
    
    for (let i = 0; i < size; i++) {
        let lefty = Math.floor(2 * i + 1);
        let righty = lefty + 1;
        if(lefty < size) {  
            nodeArr[i].left = nodeArr[lefty];
        } else {
            nodeArr[i].left = null
        }
        if (righty < size) {
            nodeArr[i].right = nodeArr[righty];
        } else {
            nodeArr[i].right = null
        }
    }

    return nodeArr;
}


function traverse(node, count = 0, arr = []) {
    if (node === null) {
        return count;
    }
    if (arr !== null) {
        arr[count] = node;
    }
    count++;
    count = traverse(node.left, count, arr)
    count = traverse(node.right, count, arr)

    return count;
}

let node1 = new Node(42);
node1.left = new Node(88);
node1.right = new Node(45);
node1.left.left = new Node(10);
node1.left.right = new Node(99);

// console.log(heapify(node1));
let sorted = traverse(node1, 0)


console.log(heapify(node1))