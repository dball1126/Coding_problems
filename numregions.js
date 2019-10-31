function numRegions(graph) {
    let queue = [graph];
    let count = 0;
    let visited = new Set();
    let node = queue.shift();
    // let boolean = [];
    for (let i in node) {
        let stack = [i];
        let boolean = [];
        if (!visited.has(i)) count++;

        while (stack.length) {
            let inner = stack.pop();
            if (!visited.has(inner)) {
                visited.add(inner)     
                for(let i in graph[inner]) {
                    stack.push(graph[inner][i])
                }
            }
        }
    }
    return count
}


// class GraphNode {
//     constructor(val) {
//         this.val = val;
//         this.neighbors = [];
//     }
// }

let graph1 = {
    'a': ['b'],
    'b': ['a'],
    'c': ['d'],
    'd': ['e', 'c'],
    'e': ['d'],
};

// let node1 = new GraphNode("a")
// let node2 = new GraphNode("b")
// let node3 = new GraphNode("c")
// let node4 = new GraphNode("d")
// let node5 = new GraphNode("e")
// node1.neighbors = [node2];
// node2.neighbors = [node1];
// node3.neighbors = [node4];
// node4.neighbors = [node5, node3];
// node5.neighbors = [node4];

// let graph = { node1, node2, node3, node4, node5 }

console.log(numRegions(graph1))