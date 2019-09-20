class GraphNode {
    constructor(val) {
        this.val = val;
        this.neighbors = [];
    }
}

let a = new GraphNode('a');
let b = new GraphNode('b');
let c = new GraphNode('c');
let d = new GraphNode('d');
let e = new GraphNode('e');
let f = new GraphNode('f');
a.neighbors = [e, c, b];
c.neighbors = [b, d];
e.neighbors = [a];
f.neighbors = [e];

// return true or false 

function directed(node1, node2){
   
    let queue = [ node1 ];
    let set = new Set();
    let set2 = new Set();
    while (queue.length) {
        let node = queue.shift();
        if(!set.has(node)) {
            set.add(node);
            if (node.val === node2.val) return true;
            queue.push(...node.neighbors);
        }
    }
    queue.push(node2);
    while (queue.length) {
        let node = queue.shift();
        if(!set2.has(node)) {
            set2.add(node);
            if (node.val === node1.val) return true;
            queue.push(...node.neighbors);
        }
    }
    return false;
    
}


console.log(directed(b, d))